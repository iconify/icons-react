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
		"content": `<style>.zwij7ub9v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 12h13l1 9h-6L12 17l-1.5 4h-6ZM8 12l7.5-9m.5 9L8.5 3");
}
</style><path class="zwij7ub9v"/>`,
		"fallback": "uix:lederhosen-style",
	});
}

export default Component;
