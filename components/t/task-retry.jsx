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

.k6pxmcbbf {
  d: path("m13.313 3.258l5.602 3.234a2.63 2.63 0 0 1 1.312 2.274v6.468a2.63 2.63 0 0 1-1.312 2.274l-5.602 3.234a2.63 2.63 0 0 1-2.625 0l-5.603-3.234a2.63 2.63 0 0 1-1.312-2.274V8.766a2.63 2.63 0 0 1 1.312-2.274l5.603-3.234a2.63 2.63 0 0 1 2.625 0");
}

.kjwvv4q0k {
  d: path("m9.25 13.25l-1.5-2l-1.5 2");
}

.rbymc7b-p {
  d: path("M8.995 8.995A4.25 4.25 0 1 1 7.75 12");
}
</style><g class="hntgybcog"><path class="k6pxmcbbf"/><path class="rbymc7b-p"/><path class="kjwvv4q0k"/></g>`,
		"fallback": "uix:task-retry",
	});
}

export default Component;
