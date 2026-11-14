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
		"content": `<style>.e33_oxmnu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 7.5h12a3.5 3.5 0 0 1 3.5 3.5v6a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 17v-6A3.5 3.5 0 0 1 6 7.5m2 0C6.5 3 3 3 3.75 5.75C4.25 7.25 6 7.5 8 7.5m0 0C9.5 3 13 3 12.25 5.75C11.75 7.25 10 7.5 8 7.5m0 0V13m5 3.5h5");
}
</style><path class="e33_oxmnu"/>`,
		"fallback": "uix:salon-gift-card",
	});
}

export default Component;
