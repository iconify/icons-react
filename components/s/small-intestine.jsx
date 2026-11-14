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
		"content": `<style>.mllgm3r-k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4h13c3.75 0 3.75 5 0 5h-9c-3.25 0-3.25 4.5 0 4.5h10c3.25 0 3.25 5 0 5H6c-1.75 0-2.5 1-2.5 3M3.5 4h.01");
}
</style><path class="mllgm3r-k"/>`,
		"fallback": "uix:small-intestine",
	});
}

export default Component;
