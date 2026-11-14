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
		"content": `<style>.c-m7zoi_s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.356 16.5H18.15a1.394 1.394 0 0 1 1.1 2.25l-1.225 1.574a1.75 1.75 0 0 1-1.381.676H5.85a1.394 1.394 0 0 1-1.1-2.25l1.225-1.574a1.75 1.75 0 0 1 1.381-.676M4.5 6.5V3H8m8 0h3.5v3.5M4.5 10v3.5H8M19.5 10v3.5H16");
}
</style><path class="c-m7zoi_s"/>`,
		"fallback": "uix:plane-detection",
	});
}

export default Component;
