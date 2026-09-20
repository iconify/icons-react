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

.buuclcb2t {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 18 18 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.e5rxwxb6q {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 3v18h18");
  opacity: var(--svg-opacity--0-2, 0.2);
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

.wtubdnbvb {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 18v-6l6 -6h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="e5rxwxb6q"/><path class="wtubdnbvb"/><path class="buuclcb2t"/><path class="qe97cg-lx"/><path class="hj1fiqb-o"/><path class="bd3-a5q0s"/></g>`,
		"fallback": "iconmind:roc-curve-duotone-thin",
	});
}

export default Component;
