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
		"content": `<style>.mifi8nb9f {
  d: path("M3 10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.n-7t0yb1r {
  d: path("M3 13h18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.spg3og_ww {
  d: path("M9 8V5h6v3");
}
</style><g class="s0phu2bbs"><path class="mifi8nb9f"/><path class="spg3og_ww"/><path class="n-7t0yb1r"/></g>`,
		"fallback": "iconmind:lunchbox-outline-bold",
	});
}

export default Component;
