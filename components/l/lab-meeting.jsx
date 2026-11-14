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
		"content": `<style>.q7aa6wbgj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 7a3 3 0 1 0 6 0a3 3 0 1 0-6 0M7.5 20.5c0-4.5 2-6.5 4.5-6.5s4.5 2 4.5 6.5M2.5 10a2 2 0 1 0 4 0a2 2 0 1 0-4 0m15 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-15 8c0-2.5 1-4 2.5-4m16.5 4c0-2.5-1-4-2.5-4");
}
</style><path class="q7aa6wbgj"/>`,
		"fallback": "uix:lab-meeting",
	});
}

export default Component;
