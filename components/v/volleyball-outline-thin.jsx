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
		"content": `<style>.cjtncdbte {
  d: path("M3 15c4 -1 10 1 13 5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ljnnjibqo {
  d: path("M4 9c4 1 10 -1 13 -5");
}

.o_ssmh9ez {
  d: path("M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0");
}

.t86ghs5dg {
  d: path("M9 3.5c2 4.5 2 12.5 0 17");
}
</style><g class="hntgybcog"><path class="o_ssmh9ez"/><path class="ljnnjibqo"/><path class="cjtncdbte"/><path class="t86ghs5dg"/></g>`,
		"fallback": "iconmind:volleyball-outline-thin",
	});
}

export default Component;
