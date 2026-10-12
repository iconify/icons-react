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
		"content": `<style>.drtvz1btn {
  cx: 12px;
  cy: 8.5px;
  r: 2.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wt0ty69zl {
  d: path("M10.5 18.75q-7.75 0-7.75-9.25a1.5 1.5 0 0 1 3 0q0 6.25 4.75 6.25Zm3 0q7.75 0 7.75-9.25a1.5 1.5 0 0 0-3 0q0 6.25-4.75 6.25Z");
}
</style><g class="hntgybcog"><path class="wt0ty69zl"/><circle class="drtvz1btn"/></g>`,
		"fallback": "iconoven:palms-up",
	});
}

export default Component;
