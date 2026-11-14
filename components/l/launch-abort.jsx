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
		"content": `<style>.t6sq32x2o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.5c2.25 1.75 3 4.25 3 7V16h-6V9.5c0-2.75.75-5.25 3-7m-3 8L3 13v2l2.5-1m6-3.5L14 13v2l-2.5-1m-3 4.75v2.75m7.5-2.75a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m.75-2l4 4");
}
</style><path class="t6sq32x2o"/>`,
		"fallback": "uix:launch-abort",
	});
}

export default Component;
