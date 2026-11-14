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
		"content": `<style>.r3009ibvw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.625 3.5h3.25A2.625 2.625 0 0 1 21.5 6.125v11.75a2.625 2.625 0 0 1-2.625 2.625h-3.25A2.625 2.625 0 0 1 13 17.875V6.125A2.625 2.625 0 0 1 15.625 3.5M4.25 2.5h1.5A1.75 1.75 0 0 1 7.5 4.25v1A1.75 1.75 0 0 1 5.75 7h-1.5A1.75 1.75 0 0 1 2.5 5.25v-1A1.75 1.75 0 0 1 4.25 2.5m0 7.25h1.5A1.75 1.75 0 0 1 7.5 11.5v1a1.75 1.75 0 0 1-1.75 1.75h-1.5A1.75 1.75 0 0 1 2.5 12.5v-1a1.75 1.75 0 0 1 1.75-1.75m0 7.25h1.5a1.75 1.75 0 0 1 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75h-1.5a1.75 1.75 0 0 1-1.75-1.75v-1A1.75 1.75 0 0 1 4.25 17m6-5H13m-2.25-2.25L13 12l-2.25 2.25m5-6.25h3m-3 4h3m-3 4h2");
}
</style><path class="r3009ibvw"/>`,
		"fallback": "uix:meta-analysis",
	});
}

export default Component;
