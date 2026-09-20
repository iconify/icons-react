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

.k187sabpz {
  d: path("M2 11h20");
}

.kpavcn10r {
  d: path("M21 11a9 9 0 0 1 -18 0");
}

.n5cv_rbxc {
  d: path("m5 11 4 -4 4 4");
}

.o7aygz06s {
  d: path("m11 11 4 -4 4 4");
}
</style><g class="hntgybcog"><path class="k187sabpz"/><path class="kpavcn10r"/><path class="n5cv_rbxc"/><path class="o7aygz06s"/></g>`,
		"fallback": "iconmind:salad-outline-thin",
	});
}

export default Component;
