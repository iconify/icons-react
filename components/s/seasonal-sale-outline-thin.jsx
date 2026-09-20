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
		"content": `<style>.gr_e4eenb {
  d: path("M9 15a4.5 4.5 0 0 1 6 -6 4.5 4.5 0 0 1 -6 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m0hvambgh {
  d: path("M16 7a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.pywr_yykw {
  d: path("m4 12 8 -8h8v8l-8 8Z");
}
</style><g class="hntgybcog"><path class="pywr_yykw"/><path class="m0hvambgh"/><path class="gr_e4eenb"/></g>`,
		"fallback": "iconmind:seasonal-sale-outline-thin",
	});
}

export default Component;
