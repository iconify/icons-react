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

.juw2--bir {
  d: path("M10.375 11.5h3.25a2.625 2.625 0 0 1 2.625 2.625v.75a2.625 2.625 0 0 1-2.625 2.625h-3.25a2.625 2.625 0 0 1-2.625-2.625v-.75a2.625 2.625 0 0 1 2.625-2.625m-.875 0V9.25a2.5 2.5 0 0 1 5 0v2.25");
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="juw2--bir"/></g>`,
		"fallback": "uix:mandatory-lockout",
	});
}

export default Component;
