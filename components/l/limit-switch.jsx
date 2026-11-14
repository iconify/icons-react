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
		"content": `<style>.imw5n7gkr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.125 11h6.75a2.625 2.625 0 0 1 2.625 2.625v2.25a2.625 2.625 0 0 1-2.625 2.625h-6.75A2.625 2.625 0 0 1 3.5 15.875v-2.25A2.625 2.625 0 0 1 6.125 11M2.5 21.5h14M9.5 11l6-4.5M15 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m2.5 0h.01");
}
</style><path class="imw5n7gkr"/>`,
		"fallback": "uix:limit-switch",
	});
}

export default Component;
