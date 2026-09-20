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
		"content": `<style>.gin3wikfu {
  d: path("M4 4h16v4H4Z");
}

.q_pu2dg4d {
  fill: currentColor;
  d: path("M4 16h16v4H4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.qmliznboq {
  fill: currentColor;
  d: path("M4 4h16v4H4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.r4mupvb4g {
  d: path("M4 12c3 -2 5 1 8 0s5 1 8 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x250ois8m {
  d: path("M4 16h16v4H4Z");
}
</style><g class="s0phu2bbs"><path class="qmliznboq"/><path class="q_pu2dg4d"/><path class="gin3wikfu"/><path class="r4mupvb4g"/><path class="x250ois8m"/></g>`,
		"fallback": "iconmind:sandwich-duotone-bold",
	});
}

export default Component;
