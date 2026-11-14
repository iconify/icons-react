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
		"content": `<style>.jm3n32b1y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 19V9.5L10.5 7V4.5q1.5-2.5 3 0V7L15 9.5V19Zm-.25 0h6.5a1.25 1.25 0 0 1 1.25 1.25a1.25 1.25 0 0 1-1.25 1.25h-6.5a1.25 1.25 0 0 1-1.25-1.25A1.25 1.25 0 0 1 8.75 19M10.5 7h3");
}
</style><path class="jm3n32b1y"/>`,
		"fallback": "uix:shell-casing",
	});
}

export default Component;
