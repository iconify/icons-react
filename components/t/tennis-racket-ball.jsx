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

.i_6ld_3nq {
  d: path("M4.25 7.75a4.75 5.75 0 1 0 9.5 0a4.75 5.75 0 1 0-9.5 0");
}

.nw6lq86ec {
  d: path("M6.5 12.75L9 16l2.5-3.25M9 16v5.5m6.25-3.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m-11-10.25h9.5");
}
</style><g class="hntgybcog"><path class="i_6ld_3nq"/><path class="nw6lq86ec"/></g>`,
		"fallback": "uix:tennis-racket-ball",
	});
}

export default Component;
