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
		"content": `<style>.qebqejb8h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11.5H8v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h5.5m0 5H16v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2H2.5m9.5-12v15m-4-15h8");
}
</style><path class="qebqejb8h"/>`,
		"fallback": "uix:water-valve-closed",
	});
}

export default Component;
