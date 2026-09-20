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
		"content": `<style>.fjiq7393s {
  d: path("m13 9.5 2.5 2.5 -2.5 2.5");
}

.n48w5yb-p {
  d: path("M14 4h5a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t87ohzbeq {
  d: path("M9 4v16");
}
</style><g class="s0phu2bbs"><path class="n48w5yb-p"/><path class="t87ohzbeq"/><path class="fjiq7393s"/></g>`,
		"fallback": "iconmind:panel-left-open-outline-bold",
	});
}

export default Component;
