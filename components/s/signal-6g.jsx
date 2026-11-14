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
		"content": `<style>.pbc73dbcb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21v-3m2.75 3v-5.75M8 21v-8.5m2.75 8.5V9.75M14.875 7za1.375 1.375 0 0 1 1.375 1.375v11.25A1.375 1.375 0 0 1 14.875 21a1.375 1.375 0 0 1-1.375-1.375V8.375A1.375 1.375 0 0 1 14.875 7m5.5-4za1.375 1.375 0 0 1 1.375 1.375v15.25A1.375 1.375 0 0 1 20.375 21A1.375 1.375 0 0 1 19 19.625V4.375A1.375 1.375 0 0 1 20.375 3");
}
</style><path class="pbc73dbcb"/>`,
		"fallback": "uix:signal-6g",
	});
}

export default Component;
