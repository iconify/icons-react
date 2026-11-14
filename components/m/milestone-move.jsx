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
		"content": `<style>.cw7qmbcig {
  d: path("m10.061 10.561l1.378 1.378a1.5 1.5 0 0 1 0 2.122l-1.378 1.378a1.5 1.5 0 0 1-2.122 0l-1.378-1.378a1.5 1.5 0 0 1 0-2.122l1.378-1.378a1.5 1.5 0 0 1 2.122 0M2.5 19.5h19M9 6.5c3-3.75 9-3.25 10.5 3.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sj6cdsbsm {
  d: path("m17 8.75l2.5 1.5l1.5-2.5");
}
</style><g class="hntgybcog"><path class="cw7qmbcig"/><path class="sj6cdsbsm"/></g>`,
		"fallback": "uix:milestone-move",
	});
}

export default Component;
