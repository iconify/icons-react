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
		"content": `<style>.t9e3wkbih {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5v-17h4v17m0-17c6 0 5 12.5 14.5 12.5M3 9h4m-4 5.5h4m3 5q2-1.5 4 0t4 0t4 0");
}
</style><path class="t9e3wkbih"/>`,
		"fallback": "uix:pin-water-park",
	});
}

export default Component;
