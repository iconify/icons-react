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
		"content": `<style>.fixud3bop {
  d: path("M3 5h18M3 19h12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s6p3z6bxv {
  d: path("M19 8.5v7");
}

.zmv52mbhq {
  fill: currentColor;
  d: path("M4.75 9.5h9.5A1.75 1.75 0 0 1 16 11.25v1.5a1.75 1.75 0 0 1-1.75 1.75h-9.5A1.75 1.75 0 0 1 3 12.75v-1.5A1.75 1.75 0 0 1 4.75 9.5");
}
</style><g class="hntgybcog"><path class="fixud3bop"/><path class="zmv52mbhq"/><path class="s6p3z6bxv"/></g>`,
		"fallback": "uix:text-select",
	});
}

export default Component;
