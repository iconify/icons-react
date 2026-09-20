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
		"content": `<style>.qad3kqbgr {
  d: path("M4 10a8 8 0 0 1 16 0l-8 8Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wl7bxfbmv {
  d: path("M9 7h3l3 3 -3 3H9Z");
}
</style><g class="s0phu2bbs"><path class="qad3kqbgr"/><path class="wl7bxfbmv"/></g>`,
		"fallback": "iconmind:place-label-outline-bold",
	});
}

export default Component;
