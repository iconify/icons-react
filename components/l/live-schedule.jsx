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

.xv_y5yg6a {
  d: path("M7 5h10a3.5 3.5 0 0 1 3.5 3.5V17a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 17V8.5A3.5 3.5 0 0 1 7 5m1-2v4m8-4v4M3.5 10h17");
}

.y8kqn8bvl {
  d: path("m12.375 14l.003.002a1.5 1.5 0 0 1 0 2.496l-.003.002a1.206 1.206 0 0 1-1.875-1.003v-.494A1.206 1.206 0 0 1 12.375 14");
}
</style><g class="hntgybcog"><path class="xv_y5yg6a"/><path class="y8kqn8bvl"/></g>`,
		"fallback": "uix:live-schedule",
	});
}

export default Component;
