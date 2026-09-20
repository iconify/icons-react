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
		"content": `<style>.a0w40fbyp {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m7 18 -4 -4 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.crw18vrkk {
  d: path("m18 14 -5 5H9");
}

.hspeog_hs {
  d: path("m7 18 -4 -4 4 -4");
}

.k-f_lrb-e {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m6 14 5 -5h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k5neb7b3k {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12.5 6.5 15 9l-2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kd8pirhpr {
  d: path("M12.5 6.5 15 9l-2.5 2.5");
}

.mlzwc7b5b {
  d: path("m6 14 5 -5h4");
}

.nlogjebfr {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m18 14 -5 5H9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rp0xo7l1b {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M11.5 16.5 9 19l2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.z-xixkiyt {
  d: path("M11.5 16.5 9 19l2.5 2.5");
}
</style><g class="s0phu2bbs"><path class="k-f_lrb-e"/><path class="k5neb7b3k"/><path class="nlogjebfr"/><path class="rp0xo7l1b"/><path class="a0w40fbyp"/><path class="mlzwc7b5b"/><path class="kd8pirhpr"/><path class="crw18vrkk"/><path class="z-xixkiyt"/><path class="hspeog_hs"/></g>`,
		"fallback": "iconmind:recycle-duotone-bold",
	});
}

export default Component;
