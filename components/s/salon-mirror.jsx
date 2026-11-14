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
		"content": `<style>.p68zldbek {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 2.5h2A3.5 3.5 0 0 1 16.5 6v4a3.5 3.5 0 0 1-3.5 3.5h-2A3.5 3.5 0 0 1 7.5 10V6A3.5 3.5 0 0 1 11 2.5m1 11V17m-8 0h16M6 17v4.5M18 17v4.5m-7.5-12l3-3");
}
</style><path class="p68zldbek"/>`,
		"fallback": "uix:salon-mirror",
	});
}

export default Component;
