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
		"content": `<style>.e36i9zwxh {
  d: path("M11 15h6");
}

.lqcp5xb1v {
  d: path("M4 3h16");
}

.r182r524c {
  d: path("M7 9h10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t3vzob-fn {
  d: path("M2 12a6 6 0 0 1 6 -6h8a6 6 0 0 1 6 6 6 6 0 0 1 -6 6H8a6 6 0 0 1 -6 -6");
}

.ubm0zdrys {
  fill: currentColor;
  d: path("M2 12a6 6 0 0 1 6 -6h8a6 6 0 0 1 6 6 6 6 0 0 1 -6 6H8a6 6 0 0 1 -6 -6");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="ubm0zdrys"/><path class="lqcp5xb1v"/><path class="t3vzob-fn"/><path class="r182r524c"/><path class="e36i9zwxh"/></g>`,
		"fallback": "iconmind:parent-span-duotone-bold",
	});
}

export default Component;
