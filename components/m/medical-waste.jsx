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
		"content": `<style>.cb-zm6bmm {
  d: path("M9.5 8.25c-3 1.75-4.75 5-4.75 8.25c0 3 2 4.75 4.75 4.75h5c2.75 0 4.75-1.75 4.75-4.75c0-3.25-1.75-6.5-4.75-8.25Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w9x60n3qn {
  d: path("M12 12a1.5 1.5 0 1 1 0 3a1.5 1.5 0 1 1 0-3m-1.75 3a1.5 1.5 0 1 1 0 3a1.5 1.5 0 1 1 0-3m3.5 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 1 1 0-3m-2.41-9L9.16 3.5q-.66-.75.34-.75h5q1 0 .34.75L12.66 6q-.66.75-1.32 0");
}
</style><g class="hntgybcog"><path class="cb-zm6bmm"/><path class="w9x60n3qn"/></g>`,
		"fallback": "iconoven:medical-waste",
	});
}

export default Component;
