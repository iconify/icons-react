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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nq5ethbcm {
  d: path("M3 8a9 3.5 0 1 0 18 0A9 3.5 0 1 0 3 8");
}

.tfscclbsv {
  d: path("M3 8v3a9 3.5 0 0 0 18 0V8M6.5 17.25h11a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-11a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5");
}
</style><g class="hntgybcog"><path class="nq5ethbcm"/><path class="tfscclbsv"/></g>`,
		"fallback": "uix:robot-vacuum-brush",
	});
}

export default Component;
