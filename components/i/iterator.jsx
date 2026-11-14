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

.k_y2xpwaa {
  d: path("M16 5.072a8 8 0 1 1-8 0");
}

.u95zk4bjs {
  d: path("m5.25 4.25l3 .75l-.75 3M9 12h.01M12 12h.01M15 12h.01");
}
</style><g class="hntgybcog"><path class="k_y2xpwaa"/><path class="u95zk4bjs"/></g>`,
		"fallback": "uix:iterator",
	});
}

export default Component;
