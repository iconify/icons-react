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
		"content": `<style>.mn813eb9c {
  d: path("M5 7.5V5h16.5v7.3M5 16.5h.01M17 10h.01M6.25 13.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm3.5 0H15m-2.25 0v2m2.25-2v1.1M14.75 18l2 2L21 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xnhebibud {
  d: path("M11.8 19H2.5V7.5h17v5.8");
}
</style><g class="ulnmmdpxh"><path class="xnhebibud"/><path class="mn813eb9c"/></g>`,
		"fallback": "uix-sharp:rent-paid",
	});
}

export default Component;
