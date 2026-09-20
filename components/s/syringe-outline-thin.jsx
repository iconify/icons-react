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
		"content": `<style>.fn-c3ibgj {
  d: path("m2.5 18.5 3 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jcehvlm7j {
  d: path("M15.5 8.5 20 4");
}

.rq8-ufbbm {
  d: path("m6 15 8 -8 3 3 -8 8Z");
}

.tb-3q2ztn {
  d: path("M7.5 16.5 4 20");
}
</style><g class="hntgybcog"><path class="rq8-ufbbm"/><path class="jcehvlm7j"/><path class="tb-3q2ztn"/><path class="fn-c3ibgj"/></g>`,
		"fallback": "iconmind:syringe-outline-thin",
	});
}

export default Component;
