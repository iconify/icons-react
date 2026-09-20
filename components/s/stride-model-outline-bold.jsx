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
		"content": `<style>.jrpnc2pnl {
  d: path("M15 5h3a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V8a3 3 0 0 1 3 -3h3");
}

.l3rn9jbjr {
  d: path("M14.5 8v10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vtcobwbvd {
  d: path("M9.5 8v10");
}
</style><g class="s0phu2bbs"><path class="jrpnc2pnl"/><path class="vtcobwbvd"/><path class="l3rn9jbjr"/></g>`,
		"fallback": "iconmind:stride-model-outline-bold",
	});
}

export default Component;
