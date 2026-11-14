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
		"content": `<style>.mbac30bsg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11.5A1.5 1.5 0 0 1 4 10h10.5V5.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1V10a1 1 0 0 1-1 1h-3v4a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 15Zm14-7V2M5 16.5V21m3.5-4.5V21m3.5-4.5V21m3.5-4.5V21m3-13.5h.01");
}
</style><path class="mbac30bsg"/>`,
		"fallback": "uix:robot-dog",
	});
}

export default Component;
