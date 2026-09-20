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
		"content": `<style>.ao9hey9_y {
  fill: currentColor;
  d: path("M14 18v-6l4 -4 4 4v6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.jeaqztjrg {
  d: path("M2 18v-6l4 -4 4 4v6Z");
}

.pxkh6-9_k {
  d: path("M14 18v-6l4 -4 4 4v6Z");
}

.qdlh6lbap {
  fill: currentColor;
  d: path("M2 18v-6l4 -4 4 4v6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="qdlh6lbap"/><path class="ao9hey9_y"/><path class="jeaqztjrg"/><path class="pxkh6-9_k"/></g>`,
		"fallback": "iconmind:neighbour-duotone-bold",
	});
}

export default Component;
