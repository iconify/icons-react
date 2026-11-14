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
		"content": `<style>.p-nf6-t1n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 9h8v8H7Zm0 0l4-4h8l-4 4m4-4v8l-4 4M7 9V2.5M5.25 4.25L7 2.5l1.75 1.75M15 17h6.5m-1.75-1.75L21.5 17l-1.75 1.75M7 17l-4 4m0-2.5V21h2.5");
}
</style><path class="p-nf6-t1n"/>`,
		"fallback": "uix:local-space",
	});
}

export default Component;
