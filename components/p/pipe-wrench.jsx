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

.v9pozqbot {
  d: path("m11.47 10.055l2.475 2.475a1.25 1.25 0 0 1 0 1.768a1.25 1.25 0 0 1-1.768 0l-2.475-2.475a1.25 1.25 0 0 1 0-1.768a1.25 1.25 0 0 1 1.768 0");
}

.w0jhp9a6y {
  d: path("m16.95 3.515l2.651 2.651a1.25 1.25 0 0 1 0 1.768a1.25 1.25 0 0 1-1.767 0l-.884-.884a1.5 1.5 0 0 0-2.122 0l-.53.531a1.25 1.25 0 0 1-1.768 0a1.25 1.25 0 0 1 0-1.768l2.298-2.298a1.5 1.5 0 0 1 2.122 0m-3.005 5.48l2.828 2.828a1.25 1.25 0 0 1 0 1.768a1.25 1.25 0 0 1-1.768 0l-2.828-2.828a1.25 1.25 0 0 1 0-1.768a1.25 1.25 0 0 1 1.768 0m-3.006 4.066za2 2 0 0 1 0 2.828l-2.828 2.829a2 2 0 0 1-2.829 0a2 2 0 0 1 0-2.829l2.829-2.828a2 2 0 0 1 2.828 0");
}
</style><g class="hntgybcog"><path class="w0jhp9a6y"/><path class="v9pozqbot"/></g>`,
		"fallback": "uix:pipe-wrench",
	});
}

export default Component;
