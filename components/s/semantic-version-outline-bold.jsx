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
		"content": `<style>.avartybbb {
  d: path("M11 9.5v5");
}

.c5icmybsm {
  d: path("m4 12 6 -6h10v12H10Z");
}

.gvu3jzbph {
  d: path("M14 9.5v5");
}

.phup74asp {
  d: path("M17 9.5v5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="c5icmybsm"/><path class="avartybbb"/><path class="gvu3jzbph"/><path class="phup74asp"/></g>`,
		"fallback": "iconmind:semantic-version-outline-bold",
	});
}

export default Component;
