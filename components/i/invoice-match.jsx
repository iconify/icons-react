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
		"content": `<style>.o1lbjjbbw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5h6.5V13l-1.75-1.25L6.25 13l-1.5-1.25L3 13Zm17.268 9.977l-1.018-.727l-1.5 1.25l-1.5-1.25L14.5 13V2.5H21v9.3M9.5 7.5h5m.25 10.5l2 2L21 15.75");
}
</style><path class="o1lbjjbbw"/>`,
		"fallback": "uix-sharp:invoice-match",
	});
}

export default Component;
