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
		"content": `<style>.ungdrrb3g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 14a9 9 0 0 1 18 0m-9 0l3.75-4.5M5 18q3.5-2 7 0t7 0");
}
</style><path class="ungdrrb3g"/>`,
		"fallback": "uix:power-physics",
	});
}

export default Component;
