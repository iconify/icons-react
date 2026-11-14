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
		"content": `<style>.pzz_g0v2m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 10.5H18a3.5 3.5 0 0 1 3.5 3.5v3.5A3.5 3.5 0 0 1 18 21h-7.5A3.5 3.5 0 0 1 7 17.5V14a3.5 3.5 0 0 1 3.5-3.5m1 0V9A1.5 1.5 0 0 1 13 7.5h2.5A1.5 1.5 0 0 1 17 9v1.5M2.5 5.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M9 6.5h.01m2.24 1h.01M7 15h14.5");
}
</style><path class="pzz_g0v2m"/>`,
		"fallback": "uix:security-cash-in-transit",
	});
}

export default Component;
