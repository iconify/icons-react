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
		"content": `<style>.frpdz9bxu {
  d: path("M9.5 15a6.5 6.5 0 1 1 5 0v2.5h-5Zm.75 5.5h3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ub1orqa5w {
  fill: currentColor;
  d: path("M12 5.25a3.75 3.75 0 0 0 0 7.5Z");
}
</style><g class="hntgybcog"><path class="frpdz9bxu"/><path class="ub1orqa5w"/></g>`,
		"fallback": "uix:lightbulb-dim",
	});
}

export default Component;
