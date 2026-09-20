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
		"content": `<style>.ng3en5g9c {
  fill: currentColor;
  d: path("M216 36H40a20 20 0 0 0-20 20v152a12 12 0 0 0 17.37 10.73L64 205.42l26.63 13.31a12 12 0 0 0 10.74 0L128 205.42l26.63 13.31a12 12 0 0 0 10.74 0L192 205.42l26.63 13.31A12 12 0 0 0 236 208V56a20 20 0 0 0-20-20m-4 152.58l-14.63-7.31a12 12 0 0 0-10.74 0L160 194.58l-26.63-13.31a12 12 0 0 0-10.74 0L96 194.58l-26.63-13.31a12 12 0 0 0-10.74 0L44 188.58V60h168ZM95.51 135.51L111 120l-15.49-15.51a12 12 0 0 1 17-17L128 103l15.51-15.52a12 12 0 0 1 17 17L145 120l15.52 15.51a12 12 0 0 1-17 17L128 137l-15.51 15.52a12 12 0 0 1-17-17Z");
}
</style><path class="ng3en5g9c"/>`,
		"fallback": "ph:receipt-x-bold",
	});
}

export default Component;
