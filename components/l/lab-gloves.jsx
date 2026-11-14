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
		"content": `<style>.c6dy5bc6m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 20.5V17l-3.25-4.25a1.5 1.5 0 0 1 2.25-2l1.5 1.5V5.5a1.75 1.75 0 0 1 3.5 0v5v-5a1.75 1.75 0 0 1 3.5 0V11V7.5a1.5 1.5 0 0 1 3 0V15c0 1-1 2-2 2.5v3Zm0-3h8.5");
}
</style><path class="c6dy5bc6m"/>`,
		"fallback": "uix:lab-gloves",
	});
}

export default Component;
