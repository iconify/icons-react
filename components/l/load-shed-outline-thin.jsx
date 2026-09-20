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
		"content": `<style>.bcvts4b4i {
  d: path("M13 18.5V21");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kpspt_bpo {
  d: path("M7 8h10");
}

.sd8rzobni {
  d: path("M17 17v2.5");
}

.u4z3yfbwn {
  d: path("M4 5v9h16V5");
}
</style><g class="hntgybcog"><path class="u4z3yfbwn"/><path class="kpspt_bpo"/><path class="sd8rzobni"/><path class="bcvts4b4i"/></g>`,
		"fallback": "iconmind:load-shed-outline-thin",
	});
}

export default Component;
