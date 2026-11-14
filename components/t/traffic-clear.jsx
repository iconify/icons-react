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
		"content": `<style>.ecl-bzb2i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 21.5l5-19m7.5 0l3 11.5M11.75 3v3m0 3.5V13m0 3.5v4m3-2.5l2 2L21 15.75");
}
</style><path class="ecl-bzb2i"/>`,
		"fallback": "uix:traffic-clear",
	});
}

export default Component;
