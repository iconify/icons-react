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
		"content": `<style>.lnv5wg3xc {
  d: path("M19 13v5");
}

.r8sldsvbw {
  d: path("M5 13a7 7 0 0 1 14 0");
}

.rg0uhlb5x {
  d: path("m2 10 3 3 3 -3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="r8sldsvbw"/><path class="lnv5wg3xc"/><path class="rg0uhlb5x"/></g>`,
		"fallback": "iconmind:undo-outline-bold",
	});
}

export default Component;
