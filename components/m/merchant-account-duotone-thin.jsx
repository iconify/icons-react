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
		"content": `<style>.cljv9cb7j {
  fill: currentColor;
  d: path("M10 13a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
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

.jkh2r59sx {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 5h20M2 5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jtt2bi6nu {
  d: path("M8 18.5h8");
}

.l7lvdwbxu {
  d: path("M10 13a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.mi5wk5bvv {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8 18.5h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qrhqs_vfa {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 8v14h16V8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tp7101bon {
  d: path("M2 5h20M2 5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0");
}

.yb0d-pkkp {
  d: path("M4 8v14h16V8");
}
</style><g class="hntgybcog"><path class="cljv9cb7j"/><path class="jkh2r59sx"/><path class="qrhqs_vfa"/><path class="mi5wk5bvv"/><path class="tp7101bon"/><path class="yb0d-pkkp"/><path class="l7lvdwbxu"/><path class="jtt2bi6nu"/></g>`,
		"fallback": "iconmind:merchant-account-duotone-thin",
	});
}

export default Component;
