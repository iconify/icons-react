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
		"content": `<style>.jl4equbic {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7V2.5H7m10 0h4.5V7m0 10v4.5H17m-10 0H2.5V17m6.75-7.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M7 18.5c0-3 2.25-4.5 5-4.5s5 1.5 5 4.5");
}
</style><path class="jl4equbic"/>`,
		"fallback": "uix:tenant-screening",
	});
}

export default Component;
