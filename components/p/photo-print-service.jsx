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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p6ovsxlir {
  d: path("M6.5 12v9.5h11V12M5 12h14");
}

.q5_-0xbqy {
  d: path("M6 7h12a3.5 3.5 0 0 1 3.5 3.5v1A3.5 3.5 0 0 1 18 15H6a3.5 3.5 0 0 1-3.5-3.5v-1A3.5 3.5 0 0 1 6 7m.5 0V2.5h11V7");
}

.z80-_0b0x {
  d: path("m8 20l3-3.5l2 2l1.25-1.25l1.75 2");
}
</style><g class="hntgybcog"><path class="q5_-0xbqy"/><path class="p6ovsxlir"/><path class="z80-_0b0x"/></g>`,
		"fallback": "uix:photo-print-service",
	});
}

export default Component;
