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

.in6t1tblh {
  fill: currentColor;
  d: path("M4 19V9a5 5 0 0 1 16 0v10Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.jof7c9fpk {
  d: path("M4 9h16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.w33xiq-if {
  d: path("M4 19V9a5 5 0 0 1 16 0v10Z");
}
</style><g class="s0phu2bbs"><path class="in6t1tblh"/><path class="w33xiq-if"/><path class="jof7c9fpk"/><path class="e4mo_8b_s"/></g>`,
		"fallback": "iconmind:train-duotone-bold",
	});
}

export default Component;
