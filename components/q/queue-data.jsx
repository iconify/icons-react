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
		"content": `<style>.yv-ezsboz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 5h2a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5v-2A1.5 1.5 0 0 1 3.75 5M11 5h2a1.5 1.5 0 0 1 1.5 1.5v2A1.5 1.5 0 0 1 13 10h-2a1.5 1.5 0 0 1-1.5-1.5v-2A1.5 1.5 0 0 1 11 5m7.25 0h2a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5v-2a1.5 1.5 0 0 1 1.5-1.5M2.5 16h19m-3-3l3 3l-3 3");
}
</style><path class="yv-ezsboz"/>`,
		"fallback": "uix:queue-data",
	});
}

export default Component;
