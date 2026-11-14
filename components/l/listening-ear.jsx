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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ixnf226kz {
  d: path("M11 8.5c0-3.5 2.25-6 5-6c3 0 5 2.5 5 6c0 3-1.75 4.25-2.75 5.5s-1 3-1.5 4.5c-.5 1.75-1.75 3-3.25 3c-1.25 0-2.5-1-2.5-2.25");
}

.v5lw16z2b {
  d: path("M14 8.75C14 7.25 15 6 16.25 6s2 1.25 2 2.5s-1 2-1.75 2.75m-8.048 2.184a2.5 2.5 0 0 1 0-2.868m-2.253 4.445a5.25 5.25 0 0 1 0-6.022m-2.252 7.6a8 8 0 0 1 0-9.178");
}
</style><g class="hntgybcog"><path class="ixnf226kz"/><path class="v5lw16z2b"/></g>`,
		"fallback": "uix:listening-ear",
	});
}

export default Component;
