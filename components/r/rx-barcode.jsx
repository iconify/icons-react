import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d53_dr79c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5h19v14h-19ZM6 8.5v7m3-7v7m3-7v7m3-7v7m3-7v7");
}
</style><path class="d53_dr79c"/>`,
		"fallback": "uix-sharp:rx-barcode",
	});
}

export default Component;
