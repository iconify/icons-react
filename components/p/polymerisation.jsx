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
		"content": `<style>.q6sdc2byh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 9.5h.5A2.5 2.5 0 0 1 8 12a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 12A2.5 2.5 0 0 1 5 9.5m6.75 0h.5a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5h-.5a2.5 2.5 0 0 1-2.5-2.5a2.5 2.5 0 0 1 2.5-2.5m6.75 0h.5a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5h-.5A2.5 2.5 0 0 1 16 12a2.5 2.5 0 0 1 2.5-2.5M8 12h1.25m5.5 0H16");
}
</style><path class="q6sdc2byh"/>`,
		"fallback": "uix:polymerisation",
	});
}

export default Component;
