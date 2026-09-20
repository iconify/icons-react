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
		"content": `<style>.g567-ibsp {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m16 10 3 3 3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.l7do2ub7w {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M5 13a7 7 0 0 1 14 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ltbxi_2yl {
  d: path("M5 13v5");
}

.mhnu1zbsk {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M5 13v5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r8sldsvbw {
  d: path("M5 13a7 7 0 0 1 14 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vru74db2q {
  d: path("m16 10 3 3 3 -3");
}
</style><g class="s0phu2bbs"><path class="l7do2ub7w"/><path class="mhnu1zbsk"/><path class="g567-ibsp"/><path class="r8sldsvbw"/><path class="ltbxi_2yl"/><path class="vru74db2q"/></g>`,
		"fallback": "iconmind:redo-duotone-bold",
	});
}

export default Component;
