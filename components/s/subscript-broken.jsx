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
		"content": `<style>.b69cm1qkb {
  d: path("M13.5 2L3 16");
}

.c3kstztpl {
  d: path("M7.16992 7.56006L13.4999 16.0001");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o0nc7vcjl {
  d: path("M3 2L5.13 4.84");
}

.t3lhl49tb {
  d: path("M17 16.8461C17 15.8265 17.8954 15 19 15C20.1046 15 21 15.8265 21 16.8461C21 17.8656 20.5634 18.356 19.7915 19.257L17 22H21");
}
</style><g class="hntgybcog"><path class="o0nc7vcjl"/><path class="c3kstztpl"/><path class="b69cm1qkb"/><path class="t3lhl49tb"/></g>`,
		"fallback": "solar:subscript-broken",
	});
}

export default Component;
