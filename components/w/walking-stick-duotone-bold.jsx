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
		"content": `<style>.i6d8t0bvg {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M5 21h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r0wydqb2x {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 21V8a4 4 0 0 1 8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.v9bmzbkdm {
  d: path("M5 21h6");
}

.x5t19bc6r {
  d: path("M8 21V8a4 4 0 0 1 8 0");
}
</style><g class="s0phu2bbs"><path class="r0wydqb2x"/><path class="i6d8t0bvg"/><path class="x5t19bc6r"/><path class="v9bmzbkdm"/></g>`,
		"fallback": "iconmind:walking-stick-duotone-bold",
	});
}

export default Component;
