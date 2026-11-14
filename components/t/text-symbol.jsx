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
		"content": `<style>.g0me_yy0y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 20h4.5v-2C5.75 16.75 4 14.25 4 11.25C4 7 7.5 4 12 4s8 3 8 7.25c0 3-1.75 5.5-4.5 6.75v2H20");
}
</style><path class="g0me_yy0y"/>`,
		"fallback": "uix:text-symbol",
	});
}

export default Component;
