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
		"content": `<style>.e4mo_8b_s {
  d: path("M3 22h18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jof7c9fpk {
  d: path("M4 9h16");
}

.w33xiq-if {
  d: path("M4 19V9a5 5 0 0 1 16 0v10Z");
}
</style><g class="hntgybcog"><path class="w33xiq-if"/><path class="jof7c9fpk"/><path class="e4mo_8b_s"/></g>`,
		"fallback": "iconmind:train-outline-thin",
	});
}

export default Component;
