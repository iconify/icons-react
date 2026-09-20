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
		"content": `<style>.bv0-fcbtg {
  d: path("M5 6h5v5h5v5h4");
}

.i6p53q37q {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M5 6h5v5h5v5h4");
  opacity: var(--svg-opacity--0-2, 0.2);
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
</style><g class="s0phu2bbs"><path class="yxjvqtiry"/><path class="i6p53q37q"/><path class="qe97cg-lx"/><path class="bv0-fcbtg"/></g>`,
		"fallback": "iconmind:lr-schedule-duotone-bold",
	});
}

export default Component;
