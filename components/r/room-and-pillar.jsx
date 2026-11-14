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
		"content": `<style>.cdzy9jb4b {
  fill: currentColor;
  d: path("M4.25 2.75h.5a1.5 1.5 0 0 1 1.5 1.5v.5a1.5 1.5 0 0 1-1.5 1.5h-.5a1.5 1.5 0 0 1-1.5-1.5v-.5a1.5 1.5 0 0 1 1.5-1.5m15 0h.5a1.5 1.5 0 0 1 1.5 1.5v.5a1.5 1.5 0 0 1-1.5 1.5h-.5a1.5 1.5 0 0 1-1.5-1.5v-.5a1.5 1.5 0 0 1 1.5-1.5m-7.5 7.5h.5a1.5 1.5 0 0 1 1.5 1.5v.5a1.5 1.5 0 0 1-1.5 1.5h-.5a1.5 1.5 0 0 1-1.5-1.5v-.5a1.5 1.5 0 0 1 1.5-1.5m-7.5 7.5h.5a1.5 1.5 0 0 1 1.5 1.5v.5a1.5 1.5 0 0 1-1.5 1.5h-.5a1.5 1.5 0 0 1-1.5-1.5v-.5a1.5 1.5 0 0 1 1.5-1.5m15 0h.5a1.5 1.5 0 0 1 1.5 1.5v.5a1.5 1.5 0 0 1-1.5 1.5h-.5a1.5 1.5 0 0 1-1.5-1.5v-.5a1.5 1.5 0 0 1 1.5-1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wko9iebie {
  d: path("M11.25 2h1.5a1.75 1.75 0 0 1 1.75 1.75v1.5A1.75 1.75 0 0 1 12.75 7h-1.5A1.75 1.75 0 0 1 9.5 5.25v-1.5A1.75 1.75 0 0 1 11.25 2m-7.5 7.5h1.5A1.75 1.75 0 0 1 7 11.25v1.5a1.75 1.75 0 0 1-1.75 1.75h-1.5A1.75 1.75 0 0 1 2 12.75v-1.5A1.75 1.75 0 0 1 3.75 9.5m15 0h1.5A1.75 1.75 0 0 1 22 11.25v1.5a1.75 1.75 0 0 1-1.75 1.75h-1.5A1.75 1.75 0 0 1 17 12.75v-1.5a1.75 1.75 0 0 1 1.75-1.75m-7.5 7.5h1.5a1.75 1.75 0 0 1 1.75 1.75v1.5A1.75 1.75 0 0 1 12.75 22h-1.5a1.75 1.75 0 0 1-1.75-1.75v-1.5A1.75 1.75 0 0 1 11.25 17");
}
</style><g class="hntgybcog"><path class="wko9iebie"/><path class="cdzy9jb4b"/></g>`,
		"fallback": "uix:room-and-pillar",
	});
}

export default Component;
