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
		"content": `<style>.fxfo558wv {
  d: path("M4 13a8 8 0 0 1 16 0Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lb65jobfp {
  d: path("M7 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.pw61xnbei {
  d: path("M16 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.t2kmfuk0y {
  d: path("m4 13 4 4h12v-4");
}
</style><g class="hntgybcog"><path class="fxfo558wv"/><path class="t2kmfuk0y"/><path class="lb65jobfp"/><path class="pw61xnbei"/></g>`,
		"fallback": "iconmind:pram-outline-thin",
	});
}

export default Component;
