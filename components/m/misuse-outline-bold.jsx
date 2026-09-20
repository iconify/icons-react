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
		"content": `<style>.emvotkb4z {
  d: path("M4 20 20 4");
}

.lz11xk67k {
  d: path("M9 5v6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tlah7acnn {
  d: path("M6 13a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2Z");
}

.ux-gk6uae {
  d: path("M15 5v6");
}
</style><g class="s0phu2bbs"><path class="tlah7acnn"/><path class="lz11xk67k"/><path class="ux-gk6uae"/><path class="emvotkb4z"/></g>`,
		"fallback": "iconmind:misuse-outline-bold",
	});
}

export default Component;
