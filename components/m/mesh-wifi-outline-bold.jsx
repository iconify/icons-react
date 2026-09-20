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
		"content": `<style>.bo88vlbuz {
  d: path("M16 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.e030h51ix {
  d: path("M10 17a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.elc06ob4j {
  d: path("M8 8h8");
}

.fiatxpbey {
  d: path("m17 10 -4 4");
}

.i2p3oabgb {
  d: path("m7 10 4 4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wc595gblk {
  d: path("M4 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="s0phu2bbs"><path class="wc595gblk"/><path class="bo88vlbuz"/><path class="e030h51ix"/><path class="elc06ob4j"/><path class="i2p3oabgb"/><path class="fiatxpbey"/></g>`,
		"fallback": "iconmind:mesh-wifi-outline-bold",
	});
}

export default Component;
