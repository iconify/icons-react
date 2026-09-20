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
		"content": `<style>.bd3-a5q0s {
  d: path("M6 18 18 6");
}

.hj1fiqb-o {
  d: path("M6 18v-6l6 -6h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qe97cg-lx {
  d: path("M3 3v18h18");
}
</style><g class="hntgybcog"><path class="qe97cg-lx"/><path class="hj1fiqb-o"/><path class="bd3-a5q0s"/></g>`,
		"fallback": "iconmind:roc-curve-outline-thin",
	});
}

export default Component;
