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
		"content": `<style>.fvg3ppb7x {
  d: path("M3.5 20.25h10a.75.75 0 0 0 .75-.75c0-3-2.6-5.25-5.75-5.25S2.75 16.5 2.75 19.5a.75.75 0 0 0 .75.75m13.75 0v-8a1.75 1.75 0 0 1 3.5 0V13");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yk-0sacrz {
  cx: 8.5px;
  cy: 7.75px;
  r: 3.5px;
}
</style><g class="hntgybcog"><circle class="yk-0sacrz"/><path class="fvg3ppb7x"/></g>`,
		"fallback": "iconoven:user-elder",
	});
}

export default Component;
