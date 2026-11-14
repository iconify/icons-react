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
		"content": `<style>.h1ygzgwxf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m1 4.5l-1 5l3 3v4.5m-3-7.5l-2.5 3.5V21m-.5-10l4-2l3 2.5m5.5-7a2 2 0 1 0 4 0a2 2 0 1 0-4 0m1 4.5l-1 5l3 3v4.5m-3-7.5l-2.5 3.5V21m-.5-10l4-2l3 2.5");
}
</style><path class="h1ygzgwxf"/>`,
		"fallback": "uix:tryouts",
	});
}

export default Component;
