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
		"content": `<style>.bxzooxbvy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 12a4.25 4.25 0 1 0 8.5 0A4.25 4.25 0 1 0 2 12m4.25 0h.01m7.24-7l2.25 2l4.75-3.5m-7 8l2.25 2L20.5 10m-7 8l2.25 2l4.75-3.5");
}
</style><path class="bxzooxbvy"/>`,
		"fallback": "uix:smart-goal",
	});
}

export default Component;
