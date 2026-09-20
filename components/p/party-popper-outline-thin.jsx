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

.j1bx6i80n {
  d: path("m12 6 3 -3");
}

.rd9126b2a {
  d: path("m16 12 3 -3");
}

.rt0qgebuc {
  d: path("m14 9 3 -3");
}

.s_c1vbwpu {
  d: path("m3 21 8 -8c2 2 3 5 2 8Z");
}
</style><g class="hntgybcog"><path class="s_c1vbwpu"/><path class="rt0qgebuc"/><path class="rd9126b2a"/><path class="j1bx6i80n"/></g>`,
		"fallback": "iconmind:party-popper-outline-thin",
	});
}

export default Component;
