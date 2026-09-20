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
		"content": `<style>.c8m3gzb4r {
  fill: currentColor;
  d: path("M44 128a4 4 0 0 1 4-4h72a4 4 0 0 1 0 8H48a4 4 0 0 1-4-4m4-60h56a4 4 0 0 0 0-8H48a4 4 0 0 0 0 8m136 120H48a4 4 0 0 0 0 8h136a4 4 0 0 0 0-8m42.83-102.83l-40-40a4 4 0 0 0-5.66 0l-40 40a4 4 0 0 0 5.66 5.66L180 57.66V144a4 4 0 0 0 8 0V57.66l33.17 33.17a4 4 0 1 0 5.66-5.66");
}
</style><path class="c8m3gzb4r"/>`,
		"fallback": "ph:sort-descending-thin",
	});
}

export default Component;
