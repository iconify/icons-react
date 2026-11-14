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
		"content": `<style>.fh0r1t8es {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 16v-6M8 16V5m4.5 11v-3m5.5 1.5V21m-2.75-2.75L18 21l2.75-2.75");
}
</style><path class="fh0r1t8es"/>`,
		"fallback": "uix:status-down",
	});
}

export default Component;
