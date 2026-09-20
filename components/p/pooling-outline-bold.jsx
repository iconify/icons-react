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
		"content": `<style>.godgg2x3f {
  d: path("M8 16.5a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.ml5vh8o3m {
  d: path("M17 5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.n_1n94xtx {
  d: path("M9.5 8.5 12 11l2.5 -2.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tfto2zbdp {
  d: path("M5 5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.xlz01ub4s {
  d: path("M11 5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="s0phu2bbs"><path class="tfto2zbdp"/><path class="xlz01ub4s"/><path class="ml5vh8o3m"/><path class="n_1n94xtx"/><path class="godgg2x3f"/></g>`,
		"fallback": "iconmind:pooling-outline-bold",
	});
}

export default Component;
