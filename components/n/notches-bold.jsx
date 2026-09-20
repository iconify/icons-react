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
		"content": `<style>.tnri-abwu {
  fill: currentColor;
  d: path("m216.49 136.49l-80 80a12 12 0 1 1-17-17l80-80a12 12 0 1 1 17 17m-16-105a12 12 0 0 0-17 0l-152 152a12 12 0 0 0 17 17l152-152a12 12 0 0 0 0-16.98Z");
}
</style><path class="tnri-abwu"/>`,
		"fallback": "ph:notches-bold",
	});
}

export default Component;
