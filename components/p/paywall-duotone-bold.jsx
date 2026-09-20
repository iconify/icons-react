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

.cluu9-b5o {
  fill: currentColor;
  d: path("M14 9a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.h51gqww2n {
  d: path("M2 12a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0 -9 0");
}

.i09h-rbrq {
  d: path("M17 12v8");
}

.j5hk4ybky {
  fill: currentColor;
  d: path("M2 12a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0 -9 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.jcwkhjb9e {
  d: path("M17 17h2.5");
}

.mtvwri8au {
  d: path("M14 9a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="j5hk4ybky"/><path class="cluu9-b5o"/><path class="h51gqww2n"/><path class="bm68p9f0y"/><path class="mtvwri8au"/><path class="i09h-rbrq"/><path class="jcwkhjb9e"/></g>`,
		"fallback": "iconmind:paywall-duotone-bold",
	});
}

export default Component;
