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
		"content": `<style>.e2526_mqw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 14.5V5a2.5 2.5 0 0 1 5 0v9.5a3.75 3.75 0 1 1-5 0M8 8v7m7 1.25q1.75-1.5 3.5 0t3.5 0M15 20q1.75-1.5 3.5 0t3.5 0");
}
</style><path class="e2526_mqw"/>`,
		"fallback": "uix:pool-temperature",
	});
}

export default Component;
