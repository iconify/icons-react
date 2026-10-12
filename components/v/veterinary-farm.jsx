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

.paixwdg6x {
  d: path("M2.75 20.45V10.3q0-.8.65-1.26l7.95-5.58q.65-.46 1.3 0l7.95 5.58q.65.46.65 1.26v10.15q0 .8-.8.8H3.55q-.8 0-.8-.8");
}

.sd3z3ub6g {
  d: path("M10.75 10.5h2.5v3h3V16h-3v3h-2.5v-3h-3v-2.5h3Z");
}
</style><g class="hntgybcog"><path class="paixwdg6x"/><path class="sd3z3ub6g"/></g>`,
		"fallback": "iconoven:veterinary-farm",
	});
}

export default Component;
