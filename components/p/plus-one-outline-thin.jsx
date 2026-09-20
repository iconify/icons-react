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
		"content": `<style>.d3kpl_b4o {
  d: path("M5 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.dv5etjbjr {
  d: path("M19.5 8v6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lwq-egybw {
  d: path("M13 9a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.rn-lfebhh {
  d: path("M12 15a3 3 0 0 1 6 0");
}

.x58_p1b1n {
  d: path("M17 11h5");
}

.z89se__dl {
  d: path("M4 15a3 3 0 0 1 6 0");
}
</style><g class="hntgybcog"><path class="d3kpl_b4o"/><path class="z89se__dl"/><path class="lwq-egybw"/><path class="rn-lfebhh"/><path class="dv5etjbjr"/><path class="x58_p1b1n"/></g>`,
		"fallback": "iconmind:plus-one-outline-thin",
	});
}

export default Component;
