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
		"content": `<style>.gvpticbjc {
  d: path("M18 7v4");
}

.hgjyjobhk {
  d: path("M12 7v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ignqnzbqn {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 7v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ii4t72bxj {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 7h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.j1f41eokg {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 17h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kamdbib6v {
  d: path("M2 7h20");
}

.kt4_ogrrr {
  d: path("M6 7v4");
}

.kti327bux {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M18 7v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pmuiqo95v {
  d: path("M2 17h20");
}

.pnc_2386u {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 7v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="ii4t72bxj"/><path class="j1f41eokg"/><path class="ignqnzbqn"/><path class="pnc_2386u"/><path class="kti327bux"/><path class="kamdbib6v"/><path class="pmuiqo95v"/><path class="kt4_ogrrr"/><path class="hgjyjobhk"/><path class="gvpticbjc"/></g>`,
		"fallback": "iconmind:waist-measure-duotone-thin",
	});
}

export default Component;
