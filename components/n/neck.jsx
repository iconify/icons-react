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
		"content": `<style>.dgwsr6v1i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5V16c0-2 1.25-3.25 3.25-3.75l1.75-.5c1.5-.5 2-1.5 2-3V4m5 0v4.75c0 1.5.5 2.5 2 3l1.75.5c2 .5 3.25 1.75 3.25 3.75v5.5M9.5 4a2.5 1.25 0 1 0 5 0a2.5 1.25 0 1 0-5 0M7 15l3.5 1m6.5-1l-3.5 1");
}
</style><path class="dgwsr6v1i"/>`,
		"fallback": "uix:neck",
	});
}

export default Component;
