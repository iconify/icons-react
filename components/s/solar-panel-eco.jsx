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
		"content": `<style>.w92qz5b0r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.712 13.31l1.272-2a1.75 1.75 0 0 1 1.477-.81h10.351a1.75 1.75 0 0 1 1.476 2.69l-1.272 2a1.75 1.75 0 0 1-1.477.81H6.188a1.75 1.75 0 0 1-1.476-2.69m.038-.06h14.5m-5.5-2.75l-3.5 5.5m0 0v5.5m-2.75 0H13M16.25 5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}
</style><path class="w92qz5b0r"/>`,
		"fallback": "uix:solar-panel-eco",
	});
}

export default Component;
