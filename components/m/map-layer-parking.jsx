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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j0h368bpl {
  d: path("M3 3v18h18V3");
}

.mciu6vb7x {
  d: path("M7.5 11L9 7h6l1.5 4m-7.875 0h6.75A2.625 2.625 0 0 1 18 13.625v.75A2.625 2.625 0 0 1 15.375 17h-6.75A2.625 2.625 0 0 1 6 14.375v-.75A2.625 2.625 0 0 1 8.625 11m.125 3h.01m6.49 0h.01");
}
</style><g class="hntgybcog"><path class="j0h368bpl"/><path class="mciu6vb7x"/></g>`,
		"fallback": "uix:map-layer-parking",
	});
}

export default Component;
