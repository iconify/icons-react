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
		"content": `<style>.hlk8cdcqs {
  fill: currentColor;
  d: path("M216 40H40a16 16 0 0 0-16 16v160a8 8 0 0 0 11.58 7.15L64 208.94l28.42 14.21a8 8 0 0 0 7.16 0L128 208.94l28.42 14.21a8 8 0 0 0 7.16 0L192 208.94l28.42 14.21A8 8 0 0 0 232 216V56a16 16 0 0 0-16-16M116 160a4 4 0 0 1-4 4H64a4 4 0 0 1-4-4V96a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4Zm76-8h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16m0-32h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16");
}
</style><path class="hlk8cdcqs"/>`,
		"fallback": "ph:newspaper-clipping-fill",
	});
}

export default Component;
