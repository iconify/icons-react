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
		"content": `<style>.bm68p9f0y {
  d: path("M6.5 10.5v3");
}

.h51gqww2n {
  d: path("M2 12a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0 -9 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j5hk4ybky {
  fill: currentColor;
  d: path("M2 12a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0 -9 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.jsn86acrn {
  fill: currentColor;
  d: path("M14 7h8v5.5l-4 4 -4 -4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.vt0s7oznm {
  d: path("M14 7h8v5.5l-4 4 -4 -4Z");
}
</style><g class="hntgybcog"><path class="j5hk4ybky"/><path class="jsn86acrn"/><path class="h51gqww2n"/><path class="bm68p9f0y"/><path class="vt0s7oznm"/></g>`,
		"fallback": "iconmind:insured-duotone-thin",
	});
}

export default Component;
