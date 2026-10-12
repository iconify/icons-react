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
		"content": `<style>.ccc4ueptn {
  d: path("M10 2.75a2 2.5 0 0 0 4 0M2.75 19.5h18.5m-18.5-1.75v3.5m18.5-3.5v3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o560zs1do {
  d: path("M9.75 2.75h4.5q.75 0 1.42.35l4.91 2.55q.67.35.42 1.06l-1 2.83q-.25.71-.95.43l-1.1-.44q-.7-.28-.7.47v5q0 .75-.75.75h-9q-.75 0-.75-.75v-5q0-.75-.7-.47l-1.1.44q-.7.28-.95-.43L3 6.71q-.25-.71.42-1.06L8.33 3.1q.67-.35 1.42-.35");
}
</style><g class="hntgybcog"><path class="o560zs1do"/><path class="ccc4ueptn"/></g>`,
		"fallback": "iconoven:size-guide",
	});
}

export default Component;
