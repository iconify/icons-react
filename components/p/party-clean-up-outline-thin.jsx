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
		"content": `<style>.dzjfbdtqu {
  d: path("m6 5 3 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ksls36zfl {
  d: path("m18 4 3 3");
}

.p8x8olrmk {
  d: path("M7 11v9h10v-9");
}

.vzfmp7bra {
  d: path("M5 11h14");
}
</style><g class="hntgybcog"><path class="p8x8olrmk"/><path class="vzfmp7bra"/><path class="dzjfbdtqu"/><path class="ksls36zfl"/></g>`,
		"fallback": "iconmind:party-clean-up-outline-thin",
	});
}

export default Component;
