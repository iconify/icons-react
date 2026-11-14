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
		"content": `<style>.q83flxbqj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 16.5V7.75a1.75 1.75 0 0 1 3.5 0a1.75 1.75 0 0 1 3.5 0v4.75h3.5a2 2 0 0 1 2 2v2c0 3-2.25 5-5.25 5h-2.25c-3 0-5-2-5-5m3.5-8.75v4.75m-4.33-2.25a5 5 0 0 1 0-5");
}
</style><path class="q83flxbqj"/>`,
		"fallback": "uix:pointer-two-finger",
	});
}

export default Component;
