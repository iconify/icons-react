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
		"content": `<style>.qxd71_b7t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.5 3.5l5.5 7v4L8.75 21M19.5 3.5l-5.5 7v4l1.25 6.5M10 10.5h4m-4-5a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><path class="qxd71_b7t"/>`,
		"fallback": "uix:stretch-break",
	});
}

export default Component;
