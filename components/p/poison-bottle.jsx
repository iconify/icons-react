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
		"content": `<style>.gsqewc7am {
  d: path("M8 13.5a4 4 0 0 1 8 0V16a1 1 0 0 1-1 1h-1v1.5h-4V17H9a1 1 0 0 1-1-1Zm2.25.5h.01m3.49 0h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ue-z101dq {
  d: path("M10 2.5h4V6c3.5 1 5 3.5 5 6.5V19a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 19v-6.5C5 9.5 6.5 7 10 6Z");
}
</style><g class="hntgybcog"><path class="ue-z101dq"/><path class="gsqewc7am"/></g>`,
		"fallback": "uix:poison-bottle",
	});
}

export default Component;
