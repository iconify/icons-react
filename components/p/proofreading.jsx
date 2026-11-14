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

.n37nsl_xt {
  d: path("M2.5 3H17M2.5 21H12m-4-8.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0m9.5 4L21 20");
}

.q1wf-h50c {
  d: path("m11.25 12.5l1.5 1.5l3-3");
}
</style><g class="hntgybcog"><path class="n37nsl_xt"/><path class="q1wf-h50c"/></g>`,
		"fallback": "uix:proofreading",
	});
}

export default Component;
