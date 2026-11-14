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
		"content": `<style>.h0y0oqb1j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5c1.75 1.75 2.5 3 2.5 4a2.5 2.5 0 0 1-5 0c0-1 .75-2.25 2.5-4m-1.25 9h2.5A1.75 1.75 0 0 1 15 13.25v4A1.75 1.75 0 0 1 13.25 19h-2.5A1.75 1.75 0 0 1 9 17.25v-4a1.75 1.75 0 0 1 1.75-1.75M5 21.5h14");
}
</style><path class="h0y0oqb1j"/>`,
		"fallback": "uix:power-cut-candle",
	});
}

export default Component;
