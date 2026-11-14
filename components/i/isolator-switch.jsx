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
		"content": `<style>.bw4ambnxc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16H6m0 0a1.75 1.75 0 1 0 3.5 0A1.75 1.75 0 1 0 6 16m8.5 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m3.5 0h3.5M9 14.75L17 8");
}
</style><path class="bw4ambnxc"/>`,
		"fallback": "uix:isolator-switch",
	});
}

export default Component;
