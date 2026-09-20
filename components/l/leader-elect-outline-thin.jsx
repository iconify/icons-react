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

.i2xa3obeh {
  d: path("M14.32 9.5a5.5 5.5 0 1 1 -4.64 0");
}

.mj0-vmbss {
  d: path("m8 7.5 2 -2 2 2 2 -2 2 2");
}
</style><g class="hntgybcog"><path class="mj0-vmbss"/><path class="i2xa3obeh"/></g>`,
		"fallback": "iconmind:leader-elect-outline-thin",
	});
}

export default Component;
