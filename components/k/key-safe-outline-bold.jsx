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
		"content": `<style>.chrzje8tu {
  d: path("M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.dy-bj6bwq {
  d: path("M14 10a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.h857n5bhq {
  d: path("M8 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u84sg0ngq {
  d: path("M8 10a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.y6kfzfgng {
  d: path("M14 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="s0phu2bbs"><path class="chrzje8tu"/><path class="u84sg0ngq"/><path class="dy-bj6bwq"/><path class="h857n5bhq"/><path class="y6kfzfgng"/></g>`,
		"fallback": "iconmind:key-safe-outline-bold",
	});
}

export default Component;
