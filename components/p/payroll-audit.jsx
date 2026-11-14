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
		"content": `<style>.cbdx29wdh {
  d: path("M4.688 8.5h1.625A2.19 2.19 0 0 1 8.5 10.688v8.625A2.19 2.19 0 0 1 6.313 21.5H4.688A2.19 2.19 0 0 1 2.5 19.313v-8.625A2.19 2.19 0 0 1 4.688 8.5m6.562.5a4.75 4.75 0 1 0 9.5 0a4.75 4.75 0 1 0-9.5 0m8.25 3.5l2 2m-19-2.75h6M2.5 15h6m-6 3.25h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jgdfpccus {
  d: path("M14.25 9a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}
</style><g class="hntgybcog"><path class="cbdx29wdh"/><path class="jgdfpccus"/></g>`,
		"fallback": "uix:payroll-audit",
	});
}

export default Component;
