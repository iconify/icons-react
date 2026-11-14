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
		"content": `<style>.f8q37kb0j {
  d: path("M3.5 17.5v-3A2.5 2.5 0 0 1 6 12h8a6 6 0 0 1 6 5.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vqorcjgfo {
  d: path("M7 12L4.5 3h-2M5 19.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m9.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M11.75 8h1.5A1.75 1.75 0 0 1 15 9.75v.5A1.75 1.75 0 0 1 13.25 12h-1.5A1.75 1.75 0 0 1 10 10.25v-.5A1.75 1.75 0 0 1 11.75 8M15 9.5h2.5V7");
}
</style><g class="hntgybcog"><path class="f8q37kb0j"/><path class="vqorcjgfo"/></g>`,
		"fallback": "uix:lawn-mower-petrol",
	});
}

export default Component;
