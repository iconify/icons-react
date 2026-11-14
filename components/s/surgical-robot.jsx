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
		"content": `<style>.d314uwb9h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5h16A1.5 1.5 0 0 1 21.5 4A1.5 1.5 0 0 1 20 5.5H4A1.5 1.5 0 0 1 2.5 4A1.5 1.5 0 0 1 4 2.5m4 3v3M9.25 11L14 15m-7.5-5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m7.25 6a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m1.5 1.5v2m-1.5 2l1.5-2l1.5 2");
}
</style><path class="d314uwb9h"/>`,
		"fallback": "uix:surgical-robot",
	});
}

export default Component;
