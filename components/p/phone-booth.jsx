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

.k6xjznxsv {
  d: path("M6 21.5v-15c0-2.5 2.75-4 6-4s6 1.5 6 4v15Zm0-15h12");
}

.zgfjqrrkl {
  d: path("M10.25 9.25h3.5a1.5 1.5 0 0 1 1.5 1.5v6.5a1.5 1.5 0 0 1-1.5 1.5h-3.5a1.5 1.5 0 0 1-1.5-1.5v-6.5a1.5 1.5 0 0 1 1.5-1.5m1.75 0v9.5M8.75 14h6.5");
}
</style><g class="hntgybcog"><path class="k6xjznxsv"/><path class="zgfjqrrkl"/></g>`,
		"fallback": "uix:phone-booth",
	});
}

export default Component;
