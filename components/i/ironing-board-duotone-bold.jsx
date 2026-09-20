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
		"content": `<style>.bu8ore6lj {
  d: path("M3 6h14a3 3 0 0 1 0 6H3Z");
}

.f6o19s4sp {
  d: path("M13 12c1 3 2 6 3 8");
}

.hwh3wzbtm {
  d: path("M7 12c-1 3 -2 6 -3 8");
}

.l1-bc96bi {
  fill: currentColor;
  d: path("M3 6h14a3 3 0 0 1 0 6H3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="l1-bc96bi"/><path class="bu8ore6lj"/><path class="hwh3wzbtm"/><path class="f6o19s4sp"/></g>`,
		"fallback": "iconmind:ironing-board-duotone-bold",
	});
}

export default Component;
