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
		"content": `<style>.vjaa1k4sw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 12.5h16.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 20.25 15H3.75a1.25 1.25 0 0 1-1.25-1.25a1.25 1.25 0 0 1 1.25-1.25M5 5.5h14M5 9h14M6.5 5.5v7m11-7v7M5 15l-1 6.5M19 15l1 6.5");
}
</style><path class="vjaa1k4sw"/>`,
		"fallback": "uix:park-nearby",
	});
}

export default Component;
