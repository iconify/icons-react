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
		"content": `<style>.edqcwg_4d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12q1.5-5 3 0t3 0t3 0t3 0m5 8V4m-2 2l2-2l2 2");
}
</style><path class="edqcwg_4d"/>`,
		"fallback": "uix:pitch-high",
	});
}

export default Component;
