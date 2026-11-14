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
		"content": `<style>.efj_pfbuw {
  d: path("M7.75 8.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m5 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.gxe72fb0l {
  d: path("M6 8a6 6 0 1 0 12 0A6 6 0 1 0 6 8M4 21.5c0-2.75 3.5-4.75 8-4.75s8 2 8 4.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="gxe72fb0l"/><path class="efj_pfbuw"/></g>`,
		"fallback": "uix:person-glasses",
	});
}

export default Component;
