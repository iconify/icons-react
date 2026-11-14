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
		"content": `<style>.oju9azbfy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5h8V12l5.5 2c1 .4 1.5 1.25 1.5 2.25V19h-15Zm0 10.5h10.75M7.5 19v2.25h5V19");
}
</style><path class="oju9azbfy"/>`,
		"fallback": "uix:snow-gaiters",
	});
}

export default Component;
