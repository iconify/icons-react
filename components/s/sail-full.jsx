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
		"content": `<style>.eze3ujb-w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 2.5V17M9 3q11.5 5 8 11q-4-1-8 0m-5.5 3h17l-2 3.5h-13Z");
}
</style><path class="eze3ujb-w"/>`,
		"fallback": "uix:sail-full",
	});
}

export default Component;
