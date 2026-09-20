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
		"content": `<style>.bv1yo3yzc {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m9 18 6 -6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fa5_klbta {
  d: path("M13.5 17.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jkh2r59sx {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 5h20M2 5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.o3jwr8bmt {
  d: path("m9 18 6 -6");
}

.oaf82wpzn {
  fill: currentColor;
  d: path("M13.5 17.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.qrhqs_vfa {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 8v14h16V8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tp7101bon {
  d: path("M2 5h20M2 5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0");
}

.v9tp15bnh {
  d: path("M8.5 12.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.wxaqw6igd {
  fill: currentColor;
  d: path("M8.5 12.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.yb0d-pkkp {
  d: path("M4 8v14h16V8");
}
</style><g class="hntgybcog"><path class="wxaqw6igd"/><path class="oaf82wpzn"/><path class="jkh2r59sx"/><path class="qrhqs_vfa"/><path class="bv1yo3yzc"/><path class="tp7101bon"/><path class="yb0d-pkkp"/><path class="v9tp15bnh"/><path class="o3jwr8bmt"/><path class="fa5_klbta"/></g>`,
		"fallback": "iconmind:shop-conversion-duotone-thin",
	});
}

export default Component;
