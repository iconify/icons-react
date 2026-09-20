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
		"content": `<style>.l7_1wrbhr {
  fill: currentColor;
  d: path("M180 208a12 12 0 0 1-12 12H88a12 12 0 0 1-9.6-19.2l71.95-95.92a28 28 0 1 0-48-28.06a12 12 0 0 1-22-9.62a52.3 52.3 0 0 1 6.13-10.49a52 52 0 0 1 83.06 62.59L112 196h56a12 12 0 0 1 12 12");
}
</style><path class="l7_1wrbhr"/>`,
		"fallback": "ph:number-two-bold",
	});
}

export default Component;
