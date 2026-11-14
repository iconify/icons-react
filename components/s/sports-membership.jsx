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
		"content": `<style>.smpd46a7v {
  d: path("M6.5 9.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-1 6.5a3 1.75 0 0 1 6 0m2.75-6h4.25m-4.25 4h2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wrcg6qhaf {
  d: path("M2.5 4.5h19v15h-19Z");
}
</style><g class="ulnmmdpxh"><path class="wrcg6qhaf"/><path class="smpd46a7v"/></g>`,
		"fallback": "uix-sharp:sports-membership",
	});
}

export default Component;
