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
		"content": `<style>.exo870qhz {
  d: path("M15 11h4");
}

.m0msdy1bm {
  d: path("M5 11h4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t-0jg7bvk {
  d: path("M12 7c-2 -2 -6 -3 -9 -2v14c3 -1 7 0 9 2");
}

.x4kxwubfs {
  d: path("M12 7c2 -2 6 -3 9 -2v14c-3 -1 -7 0 -9 2");
}
</style><g class="s0phu2bbs"><path class="t-0jg7bvk"/><path class="x4kxwubfs"/><path class="m0msdy1bm"/><path class="exo870qhz"/></g>`,
		"fallback": "iconmind:reading-outline-bold",
	});
}

export default Component;
