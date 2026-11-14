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
		"content": `<style>.x4wg559gn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 4l3.5 7l-1 8.5H11l1.5-2.5l-3-1.5l1-5.5L7 2.5Zm9.5 13a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m1-8l2-2M17 9.5l2-2");
}
</style><path class="x4wg559gn"/>`,
		"fallback": "uix:soccer-kick",
	});
}

export default Component;
