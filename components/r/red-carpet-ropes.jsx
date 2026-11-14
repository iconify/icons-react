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
		"content": `<style>.dfcyvcums {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M4.5 6.75V20.5m-2 0h4M17.75 5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m1.75 1.75V20.5m-2 0h4m-17-11q7.5 9 15 0");
}
</style><path class="dfcyvcums"/>`,
		"fallback": "uix:red-carpet-ropes",
	});
}

export default Component;
