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
		"content": `<style>.c33zbvbwu {
  d: path("M4 13a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q6bd2y71t {
  d: path("M3 5v16h18V5Z");
}

.xlsprdnsf {
  d: path("M9 13a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.zni8d8bse {
  d: path("m18 8 -4 4");
}
</style><g class="hntgybcog"><path class="q6bd2y71t"/><path class="c33zbvbwu"/><path class="xlsprdnsf"/><path class="zni8d8bse"/></g>`,
		"fallback": "iconmind:turntable-outline-thin",
	});
}

export default Component;
