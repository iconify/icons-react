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
		"content": `<style>.qkszotbnu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 8.5h12a3 3 0 0 1 3 3a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3a3 3 0 0 1 3-3m1.5 0v-5H14v5m-7.5 6V20m4-5.5V21m3.5-6.5v5m3.5-5V21");
}
</style><path class="qkszotbnu"/>`,
		"fallback": "uix:shredder",
	});
}

export default Component;
