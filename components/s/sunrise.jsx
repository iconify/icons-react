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
		"content": `<style>.x-dwqhoof {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 19.5a5 5 0 0 1 10 0m-14.5 0h19M12 4v7.5m-2.5-5L12 4l2.5 2.5m-8 7.5L5 12.5M17.5 14l1.5-1.5");
}
</style><path class="x-dwqhoof"/>`,
		"fallback": "uix:sunrise",
	});
}

export default Component;
