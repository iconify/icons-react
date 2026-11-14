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

.ukspgxbul {
  d: path("M9 11.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m3 0h.01m-7.26 0L6.5 11l.75 1m12-.5L17.5 11l-.75-1M18 13.75l-1.5.25");
}

.wzlgfc6ta {
  d: path("M2.5 11.5c2.5-4 6-6 9.5-6s7 2 9.5 6c-2.5 4-6 6-9.5 6s-7-2-9.5-6");
}
</style><g class="hntgybcog"><path class="wzlgfc6ta"/><path class="ukspgxbul"/></g>`,
		"fallback": "uix:red-eye",
	});
}

export default Component;
