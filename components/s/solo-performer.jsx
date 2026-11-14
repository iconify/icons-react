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
		"content": `<style>.b1815qbkn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 11a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M7.75 21.5c0-3.5 1.75-5.25 4.25-5.25s4.25 1.75 4.25 5.25M9 2.5l-6 19m12-19l6 19");
}
</style><path class="b1815qbkn"/>`,
		"fallback": "uix:solo-performer",
	});
}

export default Component;
