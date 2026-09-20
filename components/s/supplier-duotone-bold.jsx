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
		"content": `<style>.c4khiwgvb {
  d: path("M8 15h8");
}

.fmbgtccaf {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 8v14h16V8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.iq7hdacem {
  d: path("M10.5 12.5 8 15l2.5 2.5");
}

.p3j81omyh {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M10.5 12.5 8 15l2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.q12h31yct {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 15h8");
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
</style><g class="s0phu2bbs"><path class="z6qs6gbnt"/><path class="fmbgtccaf"/><path class="q12h31yct"/><path class="p3j81omyh"/><path class="tp7101bon"/><path class="yb0d-pkkp"/><path class="c4khiwgvb"/><path class="iq7hdacem"/></g>`,
		"fallback": "iconmind:supplier-duotone-bold",
	});
}

export default Component;
