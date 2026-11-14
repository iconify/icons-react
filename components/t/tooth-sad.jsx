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

.x7kakwymd {
  d: path("M12 5c-2-1.5-4.5-2-6.25-1C3.75 5.25 4 8.5 5 11s1.25 5 2 8c.5 2 2.25 2 2.75 0l1-4c.25-1 2.25-1 2.5 0l1 4c.5 2 2.25 2 2.75 0c.75-3 1-5.5 2-8s1.25-5.75-.75-7C16.5 3 14 3.5 12 5M9.5 8h.01m4.99 0h.01");
}

.ydof2rhnp {
  d: path("M9.25 12.25q2.75-2.25 5.5 0");
}
</style><g class="hntgybcog"><path class="x7kakwymd"/><path class="ydof2rhnp"/></g>`,
		"fallback": "uix:tooth-sad",
	});
}

export default Component;
