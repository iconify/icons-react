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
		"content": `<style>.drftkjb-q {
  d: path("M11 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.v740ayb7w {
  d: path("M7 7v14h10V7Z");
}

.xejjxw8bt {
  d: path("M7 7c0 -3 10 -3 10 0");
}
</style><g class="s0phu2bbs"><path class="v740ayb7w"/><path class="xejjxw8bt"/><path class="drftkjb-q"/></g>`,
		"fallback": "iconmind:pet-food-outline-bold",
	});
}

export default Component;
