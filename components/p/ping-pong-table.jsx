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
		"content": `<style>.wlzuas5sz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.22 4.5h9.56a1.75 1.75 0 0 1 1.642 1.145l2.21 6A1.75 1.75 0 0 1 18.99 14H5.01a1.75 1.75 0 0 1-1.642-2.355l2.21-6A1.75 1.75 0 0 1 7.22 4.5M5 14v5.5M19 14v5.5M2.75 9.25h18.5");
}
</style><path class="wlzuas5sz"/>`,
		"fallback": "uix:ping-pong-table",
	});
}

export default Component;
