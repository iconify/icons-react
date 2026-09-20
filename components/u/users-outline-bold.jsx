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
		"content": `<style>.d_xtg74gy {
  d: path("M15 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.igyz-cc5b {
  d: path("M3 20a5 5 0 0 1 10 0");
}

.q8-0ejn0y {
  d: path("M5 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.zhhqt74pq {
  d: path("M13 20a4 4 0 0 1 8 0");
}
</style><g class="s0phu2bbs"><path class="q8-0ejn0y"/><path class="igyz-cc5b"/><path class="d_xtg74gy"/><path class="zhhqt74pq"/></g>`,
		"fallback": "iconmind:users-outline-bold",
	});
}

export default Component;
