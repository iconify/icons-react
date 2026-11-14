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
		"content": `<style>.wd3jl9bhv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 8.5h1a3.5 3.5 0 0 1 3.5 3.5A3.5 3.5 0 0 1 7 15.5H6A3.5 3.5 0 0 1 2.5 12A3.5 3.5 0 0 1 6 8.5m11 0h1a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5h-1a3.5 3.5 0 0 1-3.5-3.5A3.5 3.5 0 0 1 17 8.5m-6.5 2q1.5-1.5 3 0");
}
</style><path class="wd3jl9bhv"/>`,
		"fallback": "uix:pin-optician",
	});
}

export default Component;
