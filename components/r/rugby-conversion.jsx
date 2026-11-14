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
		"content": `<style>.sohs6dn0q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 2.5v19m13-19v19M5.5 14h13m-10-4.5a5 5 0 0 1 7-4a5 5 0 0 1-7 4");
}
</style><path class="sohs6dn0q"/>`,
		"fallback": "uix:rugby-conversion",
	});
}

export default Component;
