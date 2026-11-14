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
		"content": `<style>.zv1knzb8v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 3.5h12.5A1.75 1.75 0 0 1 20 5.25A1.75 1.75 0 0 1 18.25 7H5.75A1.75 1.75 0 0 1 4 5.25A1.75 1.75 0 0 1 5.75 3.5m-1 7h14.5A1.75 1.75 0 0 1 21 12.25A1.75 1.75 0 0 1 19.25 14H4.75A1.75 1.75 0 0 1 3 12.25a1.75 1.75 0 0 1 1.75-1.75M6.5 7v3.5m0 3.5v5m11-12v3.5m0 3.5v5m-15 0h19");
}
</style><path class="zv1knzb8v"/>`,
		"fallback": "uix:platform-bench",
	});
}

export default Component;
