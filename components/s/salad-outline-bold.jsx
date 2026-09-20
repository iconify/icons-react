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
		"content": `<style>.k187sabpz {
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

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="k187sabpz"/><path class="kpavcn10r"/><path class="n5cv_rbxc"/><path class="o7aygz06s"/></g>`,
		"fallback": "iconmind:salad-outline-bold",
	});
}

export default Component;
