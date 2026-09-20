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
		"content": `<style>.encqelkvs {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m3 12 6 6h6l6 -6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k_2z93bzc {
  fill: currentColor;
  d: path("M11 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.n3p0zmbop {
  d: path("M11 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qb_j1kiog {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m3 12 6 -6h6l6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tcenmsthl {
  d: path("m3 12 6 -6h6l6 6");
}

.uls5d7bvt {
  d: path("m3 12 6 6h6l6 -6");
}
</style><g class="nrj6p8qat"><path class="k_2z93bzc"/><path class="qb_j1kiog"/><path class="encqelkvs"/><path class="tcenmsthl"/><path class="uls5d7bvt"/><path class="n3p0zmbop"/></g>`,
		"fallback": "iconmind:view-duotone-regular",
	});
}

export default Component;
