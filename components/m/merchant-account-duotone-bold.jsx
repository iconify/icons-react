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

.fmbgtccaf {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 8v14h16V8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jtt2bi6nu {
  d: path("M8 18.5h8");
}

.l7lvdwbxu {
  d: path("M10 13a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.oug-yvbkc {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 18.5h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tp7101bon {
  d: path("M2 5h20M2 5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0");
}

.yb0d-pkkp {
  d: path("M4 8v14h16V8");
}

.z6qs6gbnt {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 5h20M2 5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="cljv9cb7j"/><path class="z6qs6gbnt"/><path class="fmbgtccaf"/><path class="oug-yvbkc"/><path class="tp7101bon"/><path class="yb0d-pkkp"/><path class="l7lvdwbxu"/><path class="jtt2bi6nu"/></g>`,
		"fallback": "iconmind:merchant-account-duotone-bold",
	});
}

export default Component;
