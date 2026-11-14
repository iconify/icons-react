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
		"content": `<style>.l6-13dbco {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 7.5h2a3.5 3.5 0 0 1 3.5 3.5v2a3.5 3.5 0 0 1-3.5 3.5h-2A3.5 3.5 0 0 1 7.5 13v-2A3.5 3.5 0 0 1 11 7.5m1 4.5h.01M4.5 7.5L3 9.75L4.5 12L3 14.25l1.5 2.25m15-9L21 9.75L19.5 12l1.5 2.25l-1.5 2.25");
}
</style><path class="l6-13dbco"/>`,
		"fallback": "uix:vibration-sensor",
	});
}

export default Component;
