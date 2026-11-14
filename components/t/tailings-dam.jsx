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
		"content": `<style>.e3f620b4a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9 19l4-12h3.5L22 19M2 19h20M2 10h10M2 14.5q1.5-1.25 3 0t3 0");
}
</style><path class="e3f620b4a"/>`,
		"fallback": "uix:tailings-dam",
	});
}

export default Component;
