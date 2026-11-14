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
		"content": `<style>.e-k-pjbij {
  d: path("M16 21.5v-3h2.5v3m-15-15a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-1 8c0-2 1.25-3.25 3-3.25s3 1.25 3 3.25Zm.5 5h7.25m-2-2l2 2l-2 2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xe-qwxb9y {
  d: path("M13 21.5V8l4.25-4l4.25 4v13.5ZM15.75 11h.01m2.99 0h.01m-3.01 3.5h.01m2.99 0h.01");
}
</style><g class="hntgybcog"><path class="xe-qwxb9y"/><path class="e-k-pjbij"/></g>`,
		"fallback": "uix:recruitment-agency",
	});
}

export default Component;
