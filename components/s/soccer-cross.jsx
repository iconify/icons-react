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
		"content": `<style>.gg-nphbls {
  d: path("M2 15a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.klb0tdith {
  d: path("m8.421 13.216l.54.42a1.5 1.5 0 0 1 .526 1.579l-.186.68A1.5 1.5 0 0 1 7.854 17h-.708a1.5 1.5 0 0 1-1.447-1.105l-.186-.68a1.5 1.5 0 0 1 .526-1.579l.54-.42a1.5 1.5 0 0 1 1.842 0M7.5 12.5v-3m2.25 4.75l3-1M9 17l1.75 2.5M6 17l-1.75 2.5m1-5.25l-3-1M7 6.5q6-6.5 14 3");
}

.xoho0cbfn {
  d: path("M21.25 7L21 9.5l-2.5-.25");
}
</style><g class="hntgybcog"><path class="gg-nphbls"/><path class="klb0tdith"/><path class="xoho0cbfn"/></g>`,
		"fallback": "uix:soccer-cross",
	});
}

export default Component;
