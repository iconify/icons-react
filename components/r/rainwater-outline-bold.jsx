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
		"content": `<style>.ctb0q1bmb {
  d: path("m9 5 2 2a2 2 0 0 1 -4 0Z");
}

.f1_59klhv {
  d: path("m15 4 2 2a2 2 0 0 1 -4 0Z");
}

.opskey5wx {
  d: path("M7 13v7h10v-7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.y07a50u1t {
  d: path("M5 13h14");
}
</style><g class="s0phu2bbs"><path class="opskey5wx"/><path class="y07a50u1t"/><path class="ctb0q1bmb"/><path class="f1_59klhv"/></g>`,
		"fallback": "iconmind:rainwater-outline-bold",
	});
}

export default Component;
