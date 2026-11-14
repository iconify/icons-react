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
		"content": `<style>.miln84blk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16a3 3 0 1 0 6 0a3 3 0 1 0-6 0m14.75 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M8.5 16h8.75m-10-2.5l4-5.75m1.5 0L18 14.5m-7.5-8a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><path class="miln84blk"/>`,
		"fallback": "uix:lagrange-point",
	});
}

export default Component;
