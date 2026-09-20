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
		"content": `<style>.ennto9b9x {
  d: path("M16 16h5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sl0tqnboi {
  d: path("M4 12a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
}

.wuu7accch {
  d: path("M14 20h7");
}

.yf0ac-1wm {
  d: path("M10 9v3h3");
}
</style><g class="s0phu2bbs"><path class="sl0tqnboi"/><path class="yf0ac-1wm"/><path class="wuu7accch"/><path class="ennto9b9x"/></g>`,
		"fallback": "iconmind:staleness-outline-bold",
	});
}

export default Component;
