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
		"content": `<style>.l8cogbbnj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3v11.5m0-3h15.5v3M7.5 8h9.25a1.75 1.75 0 0 1 1.75 1.75a1.75 1.75 0 0 1-1.75 1.75H7.5a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 7.5 8m2.25 9.25h10A1.75 1.75 0 0 1 21.5 19v.25A1.75 1.75 0 0 1 19.75 21h-10A1.75 1.75 0 0 1 8 19.25V19a1.75 1.75 0 0 1 1.75-1.75");
}
</style><path class="l8cogbbnj"/>`,
		"fallback": "uix:trundle-bed",
	});
}

export default Component;
