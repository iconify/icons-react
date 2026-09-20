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
		"content": `<style>.i8nljac2s {
  d: path("M7 9v10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wuk2mlziz {
  d: path("M7 19h10");
}

.x44d32bzm {
  d: path("M5 6a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3 3 3 0 0 1 -3 3H8a3 3 0 0 1 -3 -3");
}

.zky2rs_uy {
  d: path("M17 9v10");
}
</style><g class="s0phu2bbs"><path class="x44d32bzm"/><path class="i8nljac2s"/><path class="zky2rs_uy"/><path class="wuk2mlziz"/></g>`,
		"fallback": "iconmind:peeler-outline-bold",
	});
}

export default Component;
