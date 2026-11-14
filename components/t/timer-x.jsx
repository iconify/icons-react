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
		"content": `<style>.vg5q_zbqv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 13a8 8 0 1 0 16 0a8 8 0 1 0-16 0ZM9.5 2.5h5m-5 8l5 5m0-5l-5 5");
}
</style><path class="vg5q_zbqv"/>`,
		"fallback": "uix-sharp:timer-x",
	});
}

export default Component;
