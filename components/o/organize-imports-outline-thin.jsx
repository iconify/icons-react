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
		"content": `<style>.a6mnjib5x {
  d: path("M3 10h4");
}

.f9457j_px {
  d: path("M3 15h7");
}

.g_k4zfu5d {
  d: path("M14 15h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hzn91qbfm {
  d: path("M14 5h6");
}

.jkka-vwvt {
  d: path("M3 5h6");
}

.w2atjyb_m {
  d: path("M14 10h6");
}
</style><g class="hntgybcog"><path class="jkka-vwvt"/><path class="a6mnjib5x"/><path class="f9457j_px"/><path class="hzn91qbfm"/><path class="w2atjyb_m"/><path class="g_k4zfu5d"/></g>`,
		"fallback": "iconmind:organize-imports-outline-thin",
	});
}

export default Component;
