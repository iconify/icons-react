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
		"content": `<style>.iyniasndp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.125 2.5h1.75A2.625 2.625 0 0 1 15.5 5.125v7.75a2.625 2.625 0 0 1-2.625 2.625h-1.75A2.625 2.625 0 0 1 8.5 12.875v-7.75A2.625 2.625 0 0 1 11.125 2.5m.875 13v5m-4 0h8M8.5 6.75h7m-7 4.5h7");
}
</style><path class="iyniasndp"/>`,
		"fallback": "uix:stack-light",
	});
}

export default Component;
