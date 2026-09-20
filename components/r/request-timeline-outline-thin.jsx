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

.lqcp5xb1v {
  d: path("M4 3h16");
}

.mzkwo-z2x {
  d: path("M7 9.5v5");
}

.phup74asp {
  d: path("M17 9.5v5");
}

.t3vzob-fn {
  d: path("M2 12a6 6 0 0 1 6 -6h8a6 6 0 0 1 6 6 6 6 0 0 1 -6 6H8a6 6 0 0 1 -6 -6");
}

.v3qgglbcl {
  d: path("M12 9.5v5");
}
</style><g class="hntgybcog"><path class="lqcp5xb1v"/><path class="t3vzob-fn"/><path class="mzkwo-z2x"/><path class="v3qgglbcl"/><path class="phup74asp"/></g>`,
		"fallback": "iconmind:request-timeline-outline-thin",
	});
}

export default Component;
