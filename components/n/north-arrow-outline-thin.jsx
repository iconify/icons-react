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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rctx16bxc {
  d: path("m12 2 10 10 -10 10L2 12Z");
}

.x26a8iq1c {
  d: path("M2 12h20");
}
</style><g class="hntgybcog"><path class="rctx16bxc"/><path class="x26a8iq1c"/></g>`,
		"fallback": "iconmind:north-arrow-outline-thin",
	});
}

export default Component;
