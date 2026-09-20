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
		"content": `<style>.bihvpwbcc {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m7.5 18 3.5 -3.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.c-wb1qndc {
  fill: currentColor;
  d: path("M3 18a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.d12g7vbfa {
  d: path("m13 12 2 2 4 -4");
}

.fvrxg8amo {
  fill: currentColor;
  d: path("M3 6a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ia46_gbxj {
  d: path("M3 6a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.k-_kk5cbs {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7.5 6 11 9.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k29qjck_m {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m13 12 2 2 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nkk2t23oa {
  d: path("M7.5 6 11 9.5");
}

.nwh20ccjn {
  d: path("m7.5 18 3.5 -3.5");
}

.rz_vrfdnw {
  d: path("M3 18a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="hntgybcog"><path class="fvrxg8amo"/><path class="c-wb1qndc"/><path class="k-_kk5cbs"/><path class="bihvpwbcc"/><path class="k29qjck_m"/><path class="ia46_gbxj"/><path class="rz_vrfdnw"/><path class="nkk2t23oa"/><path class="nwh20ccjn"/><path class="d12g7vbfa"/></g>`,
		"fallback": "iconmind:property-test-duotone-thin",
	});
}

export default Component;
