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
		"content": `<style>.bivf6i36y {
  d: path("m5 13 3 3 5 -5");
}

.l5f794mkz {
  d: path("M2 6a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v11a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
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

.ux4y69xbk {
  d: path("M12 16h8");
}
</style><g class="s0phu2bbs"><path class="l5f794mkz"/><path class="rw6ho_bav"/><path class="bivf6i36y"/><path class="ux4y69xbk"/></g>`,
		"fallback": "iconmind:vaccination-record-outline-bold",
	});
}

export default Component;
