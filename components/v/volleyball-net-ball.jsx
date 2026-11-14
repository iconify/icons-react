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

.m_ik8sbqq {
  d: path("M12 6.5q1.25-2 0-4m0 4q1 2 3.5 2m-3.5-2q-2.25-.25-3.5 2");
}

.rdrv2hx4o {
  d: path("M2.5 21.5v-8h19v8m-19-3h19M8 6.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0");
}
</style><g class="hntgybcog"><path class="rdrv2hx4o"/><path class="m_ik8sbqq"/></g>`,
		"fallback": "uix:volleyball-net-ball",
	});
}

export default Component;
