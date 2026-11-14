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
		"content": `<style>.e91i0teyo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 7c0-2 14-2 14 0S5 9 5 11s14 2 14 4s-14 2-14 4");
}
</style><path class="e91i0teyo"/>`,
		"fallback": "uix:spiral-conveyor",
	});
}

export default Component;
