import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rq3brv2dg {
  fill: currentColor;
  d: path("M216 48H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 144h-80v-64h80z");
}
</style><path class="rq3brv2dg"/>`,
		"fallback": "ph:picture-in-picture-fill",
	});
}

export default Component;
