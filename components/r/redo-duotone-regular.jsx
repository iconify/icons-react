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
		"content": `<style>.ltbxi_2yl {
  d: path("M5 13v5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qsdl_zbij {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M5 13v5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r8sldsvbw {
  d: path("M5 13a7 7 0 0 1 14 0");
}

.srsp9bb6c {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M5 13a7 7 0 0 1 14 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.t55yrrbqs {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m16 10 3 3 3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vru74db2q {
  d: path("m16 10 3 3 3 -3");
}
</style><g class="nrj6p8qat"><path class="srsp9bb6c"/><path class="qsdl_zbij"/><path class="t55yrrbqs"/><path class="r8sldsvbw"/><path class="ltbxi_2yl"/><path class="vru74db2q"/></g>`,
		"fallback": "iconmind:redo-duotone-regular",
	});
}

export default Component;
