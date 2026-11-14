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
		"content": `<style>.x9mncq_ek {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 6.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m9 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M4.5 16.5V15a3 3 0 0 1 6 0v1.5m3 0V15a3 3 0 0 1 6 0v1.5m-17 0h19M5 16.5V21m14-4.5V21");
}
</style><path class="x9mncq_ek"/>`,
		"fallback": "uix:research-team",
	});
}

export default Component;
