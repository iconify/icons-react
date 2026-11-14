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
		"content": `<style>.mlopxjb8b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 6A1.75 1.75 0 1 0 7 6a1.75 1.75 0 1 0-3.5 0m6.75 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M17 6a1.75 1.75 0 1 0 3.5 0A1.75 1.75 0 1 0 17 6M3.25 15v-2.5a2 2 0 0 1 4 0V15M10 15v-2.5a2 2 0 0 1 4 0V15m2.75 0v-2.5a2 2 0 0 1 4 0V15M2.5 15h19m-17 0v4.5m15-4.5v4.5");
}
</style><path class="mlopxjb8b"/>`,
		"fallback": "uix:people-waiting-room",
	});
}

export default Component;
