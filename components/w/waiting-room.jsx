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
		"content": `<style>.z_s4d-92r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15.5h19M5.25 3.5zA2.25 2.25 0 0 1 7.5 5.75v2A2.25 2.25 0 0 1 5.25 10A2.25 2.25 0 0 1 3 7.75v-2A2.25 2.25 0 0 1 5.25 3.5m6.75 0za2.25 2.25 0 0 1 2.25 2.25v2A2.25 2.25 0 0 1 12 10a2.25 2.25 0 0 1-2.25-2.25v-2A2.25 2.25 0 0 1 12 3.5m6.75 0zA2.25 2.25 0 0 1 21 5.75v2A2.25 2.25 0 0 1 18.75 10a2.25 2.25 0 0 1-2.25-2.25v-2a2.25 2.25 0 0 1 2.25-2.25M3.5 11H7a1 1 0 0 1 1 1a1 1 0 0 1-1 1H3.5a1 1 0 0 1-1-1a1 1 0 0 1 1-1m6.75 0h3.5a1 1 0 0 1 1 1a1 1 0 0 1-1 1h-3.5a1 1 0 0 1-1-1a1 1 0 0 1 1-1M17 11h3.5a1 1 0 0 1 1 1a1 1 0 0 1-1 1H17a1 1 0 0 1-1-1a1 1 0 0 1 1-1M4 15.5l-.5 5m8.5-5v5m8-5l.5 5");
}
</style><path class="z_s4d-92r"/>`,
		"fallback": "uix:waiting-room",
	});
}

export default Component;
