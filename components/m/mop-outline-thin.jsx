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

.kf-dg5j1v {
  d: path("M12 2v9");
}

.t9rz8abmm {
  d: path("M8 11c-1 4 -2 7 -2 9h12c0 -2 -1 -5 -2 -9Z");
}
</style><g class="hntgybcog"><path class="kf-dg5j1v"/><path class="t9rz8abmm"/></g>`,
		"fallback": "iconmind:mop-outline-thin",
	});
}

export default Component;
