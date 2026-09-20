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
		"content": `<style>.cthj1cbgp {
  d: path("M7.5 11 10 8.5l2.5 2.5");
}

.ffw_pwyfz {
  d: path("M12.62 3.5a7 7 0 1 1 -5.24 0");
}

.fhw0bqmcw {
  d: path("M7 13.5h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kfdmhd64i {
  d: path("m15 15 6 6");
}
</style><g class="hntgybcog"><path class="ffw_pwyfz"/><path class="kfdmhd64i"/><path class="cthj1cbgp"/><path class="fhw0bqmcw"/></g>`,
		"fallback": "iconmind:step-back-prompt-outline-thin",
	});
}

export default Component;
