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

.t3vzob-fn {
  d: path("M2 12a6 6 0 0 1 6 -6h8a6 6 0 0 1 6 6 6 6 0 0 1 -6 6H8a6 6 0 0 1 -6 -6");
}

.ubm0zdrys {
  fill: currentColor;
  d: path("M2 12a6 6 0 0 1 6 -6h8a6 6 0 0 1 6 6 6 6 0 0 1 -6 6H8a6 6 0 0 1 -6 -6");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.uwjz-dbef {
  d: path("m9 12 2 2 4 -4");
}
</style><g class="hntgybcog"><path class="ubm0zdrys"/><path class="lqcp5xb1v"/><path class="t3vzob-fn"/><path class="uwjz-dbef"/></g>`,
		"fallback": "iconmind:span-status-duotone-thin",
	});
}

export default Component;
