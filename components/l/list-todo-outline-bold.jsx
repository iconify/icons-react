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
		"content": `<style>.b5p141rkx {
  d: path("M11 7.5h10");
}

.loif6ccvl {
  d: path("M11 16.5h10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uvibyebdw {
  d: path("M3 5h5v5H3Z");
}

.yt7lrkbdr {
  d: path("M3 14h5v5H3Z");
}
</style><g class="s0phu2bbs"><path class="uvibyebdw"/><path class="b5p141rkx"/><path class="yt7lrkbdr"/><path class="loif6ccvl"/></g>`,
		"fallback": "iconmind:list-todo-outline-bold",
	});
}

export default Component;
