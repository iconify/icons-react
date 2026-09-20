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
		"content": `<style>.cpvmwnddk {
  d: path("M2 19a5 5 0 0 1 10 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.myekf3bzc {
  d: path("M4 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.q1ha9bc_u {
  d: path("M13.5 17H22");
}

.vr5wd2g-l {
  d: path("M13.5 11a3 3 0 0 1 3 -3H19a3 3 0 0 1 3 3 3 3 0 0 1 -3 3h-2.5a3 3 0 0 1 -3 -3");
}
</style><g class="hntgybcog"><path class="myekf3bzc"/><path class="cpvmwnddk"/><path class="vr5wd2g-l"/><path class="q1ha9bc_u"/></g>`,
		"fallback": "iconmind:user-prompt-outline-thin",
	});
}

export default Component;
