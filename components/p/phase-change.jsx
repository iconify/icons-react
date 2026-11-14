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
		"content": `<style>.nwzlrzc9v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 12h2.25A2.625 2.625 0 0 1 10 14.625v2.75A2.625 2.625 0 0 1 7.375 20h-2.25A2.625 2.625 0 0 1 2.5 17.375v-2.75A2.625 2.625 0 0 1 5.125 12m12.125-2s4.25 4.5 4.25 7a4.25 4.25 0 0 1-8.5 0c0-2.5 4.25-7 4.25-7m-13-7q-1.5 1.5 0 3t0 3m4-6q-1.5 1.5 0 3t0 3");
}
</style><path class="nwzlrzc9v"/>`,
		"fallback": "uix:phase-change",
	});
}

export default Component;
