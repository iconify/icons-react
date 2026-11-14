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
		"content": `<style>.e_u60mbnr {
  d: path("M7.5 11.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0M12 10h.01m-1.26 2.5h.01m2.49 0h.01");
}

.hdfjy2q5i {
  d: path("M3.5 11.5a8.5 8.5 0 1 0 17 0a8.5 8.5 0 1 0-17 0M4 20h16");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="hdfjy2q5i"/><path class="e_u60mbnr"/></g>`,
		"fallback": "uix:spare-tire",
	});
}

export default Component;
