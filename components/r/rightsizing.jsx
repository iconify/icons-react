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

.igf5y5b1b {
  d: path("m2.5 10.75l5 2.75l5-2.75m-5 2.75v6m11.756-6.059l1.5.875a1.5 1.5 0 0 1 .744 1.296v1.776a1.5 1.5 0 0 1-.744 1.296l-1.5.875a1.5 1.5 0 0 1-1.512 0l-1.5-.875a1.5 1.5 0 0 1-.744-1.296v-1.776a1.5 1.5 0 0 1 .744-1.296l1.5-.875a1.5 1.5 0 0 1 1.512 0");
}

.l6w_n1b3f {
  d: path("m15.5 14.75l3 1.75l3-1.75m-3 1.75V20M8 5q10.5-2.5 10.5 5m-2-2l2 2l2-2");
}

.rstv5tb5t {
  d: path("m8.343 8.464l3.25 1.787a1.75 1.75 0 0 1 .907 1.534v3.93a1.75 1.75 0 0 1-.907 1.534l-3.25 1.787a1.75 1.75 0 0 1-1.686 0l-3.25-1.787a1.75 1.75 0 0 1-.907-1.534v-3.93a1.75 1.75 0 0 1 .907-1.534l3.25-1.787a1.75 1.75 0 0 1 1.686 0");
}
</style><g class="hntgybcog"><path class="rstv5tb5t"/><path class="igf5y5b1b"/><path class="l6w_n1b3f"/></g>`,
		"fallback": "uix:rightsizing",
	});
}

export default Component;
