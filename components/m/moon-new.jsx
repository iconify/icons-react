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

.s-q6e0b1m {
  cx: 10.5px;
  cy: 13.5px;
  r: 7.5px;
}

.xefcbomhk {
  d: path("M7.92 17.19a4.5 4.5 0 0 1 0-7.38M19 2.75q.27 1.98 2.25 2.25q-1.98.27-2.25 2.25q-.27-1.98-2.25-2.25q1.98-.27 2.25-2.25");
}
</style><g class="hntgybcog"><circle class="s-q6e0b1m"/><path class="xefcbomhk"/></g>`,
		"fallback": "iconoven:moon-new",
	});
}

export default Component;
