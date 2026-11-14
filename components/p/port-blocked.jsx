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
		"content": `<style>.fz86g2djq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 3.5h13A1.5 1.5 0 0 1 20 5v5.5a1.5 1.5 0 0 1-1.5 1.5H16v2.5H8V12H5.5A1.5 1.5 0 0 1 4 10.5V5a1.5 1.5 0 0 1 1.5-1.5m2.5 2V8m3-2.5V8m3-2.5V8m1.5 7.5l5 5m0-5l-5 5");
}
</style><path class="fz86g2djq"/>`,
		"fallback": "uix:port-blocked",
	});
}

export default Component;
