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

.njhw9_-2s {
  d: path("m10.5 14l1.5-2l1.5 2");
}

.x907p8v0y {
  d: path("M10.75 12.75c-1.5-1.5-3.75.5-3.75 3.75c0 2 .5 3.25 1.5 3.25c1.25 0 2.25-.75 2.25-2Zm2.5 0c1.5-1.5 3.75.5 3.75 3.75c0 2-.5 3.25-1.5 3.25c-1.25 0-2.25-.75-2.25-2ZM12 4.5V12");
}

.zoej7biec {
  d: path("M9.5 2.5c0 1.75-1.25 2.5-3 3L5 6c-1.25.5-1.75 1.25-1.5 2.5l2.25 5c.25 1-.5 4-.5 8h13.5c0-4-.75-7-.5-8l2.25-5c.25-1.25-.25-2-1.5-2.5l-1.5-.5c-1.75-.5-3-1.25-3-3");
}
</style><g class="hntgybcog"><path class="zoej7biec"/><path class="x907p8v0y"/><path class="njhw9_-2s"/></g>`,
		"fallback": "uix:respiratory-system",
	});
}

export default Component;
