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
		"content": `<style>.dgur4c9cy {
  d: path("M14 21v-3.5h4V21");
}

.ftjlxk3sh {
  d: path("M4 21v-3.5h4V21");
}

.rw6ho_bav {
  d: path("M2 9h20");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tahjarbfs {
  d: path("M2 15V5h20v10");
}
</style><g class="s0phu2bbs"><path class="tahjarbfs"/><path class="rw6ho_bav"/><path class="ftjlxk3sh"/><path class="dgur4c9cy"/></g>`,
		"fallback": "iconmind:motel-outline-bold",
	});
}

export default Component;
