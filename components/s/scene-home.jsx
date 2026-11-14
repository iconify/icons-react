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
		"content": `<style>.q1tew_bds {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 17.5v-15h9v15zL3.75 19V4l4.5-1.5m0 15l2.5 4h10l-3.5-4");
}
</style><path class="q1tew_bds"/>`,
		"fallback": "uix:scene-home",
	});
}

export default Component;
