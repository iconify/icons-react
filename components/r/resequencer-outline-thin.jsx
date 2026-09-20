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
		"content": `<style>.ajw5g_mzy {
  d: path("M10.5 9.5 13 12l-2.5 2.5");
}

.bhkm33b7x {
  d: path("M2 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.cwioy_h_g {
  d: path("M4 15a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.h36909btm {
  d: path("M16 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jg5k_rbda {
  d: path("M16 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.pw61xnbei {
  d: path("M16 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="hntgybcog"><path class="bhkm33b7x"/><path class="cwioy_h_g"/><path class="ajw5g_mzy"/><path class="jg5k_rbda"/><path class="h36909btm"/><path class="pw61xnbei"/></g>`,
		"fallback": "iconmind:resequencer-outline-thin",
	});
}

export default Component;
