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
		"content": `<style>.a6bp5jbed {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 15a3 3 0 0 1 6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.bkuclybie {
  fill: currentColor;
  d: path("M17 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.e2kgfl2ea {
  d: path("M2 15a3 3 0 0 1 6 0");
}

.g6btd475d {
  fill: currentColor;
  d: path("M3 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.g6roycb3s {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M16 15a3 3 0 0 1 6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jv3d31_7h {
  d: path("M16 15a3 3 0 0 1 6 0");
}

.mn-a1zb6m {
  d: path("M3 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.mqnae981n {
  d: path("m9 11 3 3 3 -3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s25-orfog {
  d: path("M17 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.zo_l4ub5r {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m9 11 3 3 3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="g6btd475d"/><path class="bkuclybie"/><path class="a6bp5jbed"/><path class="g6roycb3s"/><path class="zo_l4ub5r"/><path class="mn-a1zb6m"/><path class="e2kgfl2ea"/><path class="s25-orfog"/><path class="jv3d31_7h"/><path class="mqnae981n"/></g>`,
		"fallback": "iconmind:reunion-duotone-regular",
	});
}

export default Component;
