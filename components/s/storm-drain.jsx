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
		"content": `<style>.qd0bznkqf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11h19M7.625 11h8.75A2.625 2.625 0 0 1 19 13.625v3.75A2.625 2.625 0 0 1 16.375 20h-8.75A2.625 2.625 0 0 1 5 17.375v-3.75A2.625 2.625 0 0 1 7.625 11M3.5 6C6 3.5 9.5 3.5 12 6s6 2.5 8.5 0m-12 8v3m3.5-3v3m3.5-3v3");
}
</style><path class="qd0bznkqf"/>`,
		"fallback": "uix:storm-drain",
	});
}

export default Component;
