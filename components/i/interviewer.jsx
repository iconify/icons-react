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
		"content": `<style>.fnxk7kc8o {
  d: path("M15.75 5.5c0-.75.75-1.25 1.5-1.25s1.5.5 1.5 1.25c0 1-1.5 1.25-1.5 2.25m0 1.75h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mretnrt1s {
  d: path("M4 9a3 3 0 1 0 6 0a3 3 0 1 0-6 0M2.5 20c0-2.75 1.9-4.75 4.5-4.75s4.5 2 4.5 4.75c0 .6-.4 1-1 1h-7c-.6 0-1-.4-1-1m12-17.5H20A1.5 1.5 0 0 1 21.5 4v6a1.5 1.5 0 0 1-1.5 1.5h-3.5L13 14V4a1.5 1.5 0 0 1 1.5-1.5");
}
</style><g class="hntgybcog"><path class="mretnrt1s"/><path class="fnxk7kc8o"/></g>`,
		"fallback": "uix:interviewer",
	});
}

export default Component;
