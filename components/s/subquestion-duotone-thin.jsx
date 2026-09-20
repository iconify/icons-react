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
		"content": `<style>.b4373m80b {
  d: path("M14.5 13.5A2.5 2.5 0 1 1 17 16");
}

.csyg-ybjs {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 7a4 4 0 1 1 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ky7fjq4zo {
  fill: currentColor;
  d: path("M7 15.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.n939_wb7j {
  fill: currentColor;
  d: path("M16 19.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ryzx2-jfe {
  d: path("M16 19.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.tfnum6bjl {
  d: path("M4 7a4 4 0 1 1 4 4");
}

.w4h0tcw_m {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M14.5 13.5A2.5 2.5 0 1 1 17 16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.z55just5o {
  d: path("M7 15.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="hntgybcog"><path class="ky7fjq4zo"/><path class="n939_wb7j"/><path class="csyg-ybjs"/><path class="w4h0tcw_m"/><path class="tfnum6bjl"/><path class="z55just5o"/><path class="b4373m80b"/><path class="ryzx2-jfe"/></g>`,
		"fallback": "iconmind:subquestion-duotone-thin",
	});
}

export default Component;
