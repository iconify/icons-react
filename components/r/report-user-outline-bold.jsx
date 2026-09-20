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
		"content": `<style>.ey7vq22fn {
  d: path("m16 5 5 5h-5");
}

.f69zonn4h {
  d: path("M4 17a4 4 0 0 1 8 0");
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

.xeo8ox-td {
  d: path("M16 5v15");
}
</style><g class="s0phu2bbs"><path class="q8-0ejn0y"/><path class="f69zonn4h"/><path class="xeo8ox-td"/><path class="ey7vq22fn"/></g>`,
		"fallback": "iconmind:report-user-outline-bold",
	});
}

export default Component;
