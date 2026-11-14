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
		"content": `<style>.m98ky5fac {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 12h4.25M6.5 9l-3 3l3 3m9.75-3h4.25m-3-3l3 3l-3 3m-7-7v8m3-8v8");
}
</style><path class="m98ky5fac"/>`,
		"fallback": "uix:move-horizontal",
	});
}

export default Component;
