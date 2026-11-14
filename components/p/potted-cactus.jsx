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
		"content": `<style>.b4o8ecccj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.741 14.5h8.518a1.75 1.75 0 0 1 1.697 2.174l-.875 3.5a1.75 1.75 0 0 1-1.697 1.326H8.616a1.75 1.75 0 0 1-1.697-1.326l-.875-3.5A1.75 1.75 0 0 1 7.741 14.5m2.259 0V5a2 2 0 0 1 4 0v9.5m-4-3H8.5A1.5 1.5 0 0 1 7 10V7m7 2.5h1.5A1.5 1.5 0 0 0 17 8V5.5");
}
</style><path class="b4o8ecccj"/>`,
		"fallback": "uix:potted-cactus",
	});
}

export default Component;
