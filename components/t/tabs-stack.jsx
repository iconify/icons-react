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
		"content": `<style>.enahejbnu {
  d: path("m9 5.75l1.25-3.25H14L15.25 5H21v10h-3.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l77nipb4t {
  d: path("m5.75 9l1.5-3.25H11l1.25 2.5h5.5v10H14.5");
}

.wswjm8rvn {
  d: path("M2.5 19.75v-7.837a1.75 1.75 0 0 1 .185-.783l.581-1.163A1.75 1.75 0 0 1 4.832 9h1.836a1.75 1.75 0 0 1 1.566.967l.282.566a1.75 1.75 0 0 0 1.566.967h2.668a1.75 1.75 0 0 1 1.75 1.75v6.5a1.75 1.75 0 0 1-1.75 1.75h-8.5a1.75 1.75 0 0 1-1.75-1.75");
}
</style><g class="hntgybcog"><path class="wswjm8rvn"/><path class="l77nipb4t"/><path class="enahejbnu"/></g>`,
		"fallback": "uix:tabs-stack",
	});
}

export default Component;
