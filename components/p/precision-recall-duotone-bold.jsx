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
		"content": `<style>.h44dgv3fy {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 6h6l6 6v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qbzlhkusu {
  d: path("M6 6h6l6 6v6");
}

.qe97cg-lx {
  d: path("M3 3v18h18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yxjvqtiry {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 3v18h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="yxjvqtiry"/><path class="h44dgv3fy"/><path class="qe97cg-lx"/><path class="qbzlhkusu"/></g>`,
		"fallback": "iconmind:precision-recall-duotone-bold",
	});
}

export default Component;
