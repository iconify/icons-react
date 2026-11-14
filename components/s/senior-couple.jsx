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
		"content": `<style>.h4s9hk5fo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 9a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M6.5 21.5c0-3.75 2.25-6.25 5-6.25s5 2.5 5 6.25M15.5 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m1 6.25c.5-.35 1-.5 1.5-.5c2.25 0 3.75 1.75 3.75 4.25v3M3 21.5v-12a1.5 1.5 0 0 1 3 0");
}
</style><path class="h4s9hk5fo"/>`,
		"fallback": "uix:senior-couple",
	});
}

export default Component;
