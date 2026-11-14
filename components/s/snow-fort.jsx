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
		"content": `<style>.cjek_uelk {
  d: path("M2.5 17.75V6.25A1.75 1.75 0 0 1 4.25 4.5h.25A1.5 1.5 0 0 1 6 6a1.5 1.5 0 0 0 1.5 1.5H8A1.5 1.5 0 0 0 9.5 6A1.5 1.5 0 0 1 11 4.5h2A1.5 1.5 0 0 1 14.5 6A1.5 1.5 0 0 0 16 7.5h.5A1.5 1.5 0 0 0 18 6a1.5 1.5 0 0 1 1.5-1.5h.25a1.75 1.75 0 0 1 1.75 1.75v11.5a1.75 1.75 0 0 1-1.75 1.75H4.25a1.75 1.75 0 0 1-1.75-1.75");
}

.h49rigjlx {
  d: path("M9 19.5V14a3 3 0 0 1 6 0v5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="cjek_uelk"/><path class="h49rigjlx"/></g>`,
		"fallback": "uix:snow-fort",
	});
}

export default Component;
