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
		"content": `<style>.v8r6bpbjd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9.5h6m6 0h6m-12 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-6 7h.01m4.49 0h.01m4.49 0h.01m4.49 0h.01m4.49 0h.01");
}
</style><path class="v8r6bpbjd"/>`,
		"fallback": "uix:mood-scale",
	});
}

export default Component;
