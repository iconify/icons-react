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
		"content": `<style>.g-a-u4foa {
  d: path("m13 6.5l2.75 5l-2-.5m1.75 3H9.75l1.5-1.5m-3.75 0l3-5l.75 2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i1fv66b2f {
  d: path("M12 22c-3.5-2.5-9-6.5-9-11a9 9 0 0 1 18 0c0 4.5-5.5 8.5-9 11");
}
</style><g class="hntgybcog"><path class="i1fv66b2f"/><path class="g-a-u4foa"/></g>`,
		"fallback": "uix:pin-recycling",
	});
}

export default Component;
