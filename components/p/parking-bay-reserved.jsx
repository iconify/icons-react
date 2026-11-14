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
		"content": `<style>.b-d-7ugtm {
  d: path("M9 17V7h3.5a2.75 2.75 0 0 1 0 5.5H9m3.5 0l3 4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r8-ag_e6f {
  d: path("M4 3v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3");
}
</style><g class="hntgybcog"><path class="r8-ag_e6f"/><path class="b-d-7ugtm"/></g>`,
		"fallback": "uix:parking-bay-reserved",
	});
}

export default Component;
