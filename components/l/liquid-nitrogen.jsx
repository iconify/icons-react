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
		"content": `<style>.qxbqi_j8l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 9.75v1.75c-2.5.5-3 1.5-3 3V20A1.5 1.5 0 0 0 8 21.5h8a1.5 1.5 0 0 0 1.5-1.5v-5.5c0-1.5-.5-2.5-3-3V9.75M10 7c-1.25-1.25 1.25-2.75 0-4.5M14 7c-1.25-1.25 1.25-2.75 0-4.5");
}
</style><path class="qxbqi_j8l"/>`,
		"fallback": "uix:liquid-nitrogen",
	});
}

export default Component;
