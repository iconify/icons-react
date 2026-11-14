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
		"content": `<style>.m1rezs9ee {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13.5a11 11 0 0 1 11-11a11 11 0 0 1-11 11M13 13h8l-5 8.5m-9.5-12l3-3");
}
</style><path class="m1rezs9ee"/>`,
		"fallback": "uix:rugby-sevens",
	});
}

export default Component;
