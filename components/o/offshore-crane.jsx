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
		"content": `<style>.o5th9-kvr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 18h19M5 18v3.5M19 18v3.5M8 8.5h1.5A1.5 1.5 0 0 1 11 10v6.5A1.5 1.5 0 0 1 9.5 18H8a1.5 1.5 0 0 1-1.5-1.5V10A1.5 1.5 0 0 1 8 8.5m3 0L20.5 3m0 0v7.5");
}
</style><path class="o5th9-kvr"/>`,
		"fallback": "uix:offshore-crane",
	});
}

export default Component;
