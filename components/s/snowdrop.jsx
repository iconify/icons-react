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

.s-tbcdcvs {
  d: path("M8 21.5C8 10 10 4 14 4c2.5 0 3.5 1.5 3.5 3.5M8 21.5c0-3.5-2-6-4.5-7c-.5 3 1.5 6 4.5 7");
}

.y3n_hjgbt {
  d: path("M17.5 7.5c-3 1-4 5-3 9.5l1.5-3.25l1.5 3.75l1.5-3.75L20.5 17c1-4.5 0-8.5-3-9.5");
}
</style><g class="hntgybcog"><path class="y3n_hjgbt"/><path class="s-tbcdcvs"/></g>`,
		"fallback": "uix:snowdrop",
	});
}

export default Component;
