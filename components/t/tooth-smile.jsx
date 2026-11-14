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

.m_2dh26gb {
  d: path("M9.5 10h5c0 1.5-1 2.25-2.5 2.25S9.5 11.5 9.5 10");
}

.r8d5-fo5f {
  d: path("M12 5c-2-1.5-4.5-2-6.25-1C3.75 5.25 4 8.5 5 11s1.25 5 2 8c.5 2 2.25 2 2.75 0l1-4c.25-1 2.25-1 2.5 0l1 4c.5 2 2.25 2 2.75 0c.75-3 1-5.5 2-8s1.25-5.75-.75-7C16.5 3 14 3.5 12 5M9.5 7.75h.01m4.99 0h.01");
}
</style><g class="hntgybcog"><path class="r8d5-fo5f"/><path class="m_2dh26gb"/></g>`,
		"fallback": "uix:tooth-smile",
	});
}

export default Component;
