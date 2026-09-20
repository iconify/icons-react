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
		"content": `<style>.eff5yibna {
  fill: currentColor;
  d: path("M10 4a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.h1f6hnbpb {
  d: path("M2 21v-8h6");
}

.ir_a00ama {
  d: path("M8 21V8h8v13Z");
}

.pq9ly31-r {
  d: path("M10 4a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.v4v3k2b7i {
  fill: currentColor;
  d: path("M8 21V8h8v13Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xt3sjtb4p {
  d: path("M16 13h6v8");
}
</style><g class="s0phu2bbs"><path class="v4v3k2b7i"/><path class="eff5yibna"/><path class="ir_a00ama"/><path class="h1f6hnbpb"/><path class="xt3sjtb4p"/><path class="pq9ly31-r"/></g>`,
		"fallback": "iconmind:sports-day-duotone-bold",
	});
}

export default Component;
