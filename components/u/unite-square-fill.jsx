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
		"content": `<style>.paq2a2b5c {
  fill: currentColor;
  d: path("M224 96v120a8 8 0 0 1-8 8H96a8 8 0 0 1-8-8v-48H40a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h120a8 8 0 0 1 8 8v48h48a8 8 0 0 1 8 8");
}
</style><path class="paq2a2b5c"/>`,
		"fallback": "ph:unite-square-fill",
	});
}

export default Component;
