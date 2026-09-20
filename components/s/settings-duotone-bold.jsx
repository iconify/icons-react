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
		"content": `<style>.jof7c9fpk {
  d: path("M4 9h16");
}

.ldq326b0y {
  d: path("M9 7v4");
}

.m-p3hbclp {
  d: path("M4 15h16");
}

.rfwgx-bjs {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 15h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tvejqcbad {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9 7v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ty0lyg29l {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M15 13v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vu9j-xb3y {
  d: path("M15 13v4");
}

.zl0m38bil {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 9h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="zl0m38bil"/><path class="tvejqcbad"/><path class="rfwgx-bjs"/><path class="ty0lyg29l"/><path class="jof7c9fpk"/><path class="ldq326b0y"/><path class="m-p3hbclp"/><path class="vu9j-xb3y"/></g>`,
		"fallback": "iconmind:settings-duotone-bold",
	});
}

export default Component;
