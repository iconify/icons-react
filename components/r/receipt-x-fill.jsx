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
		"content": `<style>.lwc13chip {
  fill: currentColor;
  d: path("M216 40H40a16 16 0 0 0-16 16v152a8 8 0 0 0 11.58 7.15L64 200.94l28.42 14.21a8 8 0 0 0 7.16 0L128 200.94l28.42 14.21a8 8 0 0 0 7.16 0L192 200.94l28.42 14.21A8 8 0 0 0 232 208V56a16 16 0 0 0-16-16m-58.34 98.34a8 8 0 0 1-11.32 11.32L128 131.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L116.69 120l-18.35-18.34a8 8 0 0 1 11.32-11.32L128 108.69l18.34-18.35a8 8 0 0 1 11.32 11.32L139.31 120Z");
}
</style><path class="lwc13chip"/>`,
		"fallback": "ph:receipt-x-fill",
	});
}

export default Component;
