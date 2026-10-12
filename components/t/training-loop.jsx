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
		"content": `<style>.dg-fj1b0z {
  d: path("M19.4 10.5A7.5 7.5 0 0 0 5.5 8.25m0-3.75v3.75h3.75M4.6 13.5a7.5 7.5 0 0 0 13.9 2.25m0 3.75v-3.75h-3.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xsxy7_ibl {
  d: path("M12 8.5q.42 3.08 3.5 3.5q-3.08.42-3.5 3.5q-.42-3.08-3.5-3.5q3.08-.42 3.5-3.5");
}
</style><g class="hntgybcog"><path class="dg-fj1b0z"/><path class="xsxy7_ibl"/></g>`,
		"fallback": "iconoven:training-loop",
	});
}

export default Component;
