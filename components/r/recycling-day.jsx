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
		"content": `<style>.i2u05fvtq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 4.75l3.75 6.5m-2-.75l2 .75l.25-2m-3.8 7.5H5.5M7 15.5l-1.5 1.25L7 18m-2.75-3.25l5.5-9.5m-2 .75l2-.75l.25 2m6.75 8.25h2.5A1.75 1.75 0 0 1 21 17.25v2.25a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 15 19.5v-2.25a1.75 1.75 0 0 1 1.75-1.75M15 17.75h6m-4.25-3.25V16m2.5-1.5V16");
}
</style><path class="i2u05fvtq"/>`,
		"fallback": "uix:recycling-day",
	});
}

export default Component;
