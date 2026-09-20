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
		"content": `<style>.b8vrnftmo {
  d: path("M9.5 9.5 7 12l2.5 2.5");
}

.lqcp5xb1v {
  d: path("M4 3h16");
}

.pz3wsjbwy {
  d: path("M14.5 9.5 17 12l-2.5 2.5");
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
</style><g class="s0phu2bbs"><path class="lqcp5xb1v"/><path class="t3vzob-fn"/><path class="b8vrnftmo"/><path class="pz3wsjbwy"/></g>`,
		"fallback": "iconmind:trace-context-outline-bold",
	});
}

export default Component;
