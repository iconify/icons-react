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
		"content": `<style>.hi2_i-t_x {
  fill: currentColor;
  d: path("M5 11a7 7 0 1 0 14 0 7 7 0 1 0 -14 0");
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

.rcb4z6b_d {
  d: path("M5 11a7 7 0 1 0 14 0 7 7 0 1 0 -14 0");
}

.t4v1u1jek {
  d: path("M2 13c4 5 16 5 20 0");
}
</style><g class="hntgybcog"><path class="hi2_i-t_x"/><path class="rcb4z6b_d"/><path class="t4v1u1jek"/></g>`,
		"fallback": "iconmind:planet-duotone-thin",
	});
}

export default Component;
