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
		"content": `<style>.rctx16bxc {
  d: path("m12 2 10 10 -10 10L2 12Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x26a8iq1c {
  d: path("M2 12h20");
}
</style><g class="s0phu2bbs"><path class="rctx16bxc"/><path class="x26a8iq1c"/></g>`,
		"fallback": "iconmind:north-arrow-outline-bold",
	});
}

export default Component;
