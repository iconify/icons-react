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
		"content": `<style>.at_623xyx {
  d: path("M5 6a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
}

.fmlaifbpn {
  d: path("M12 16v4");
}

.jkuojibnm {
  d: path("M3 20h18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ys-dg812g {
  d: path("M3 16h18");
}
</style><g class="s0phu2bbs"><path class="at_623xyx"/><path class="ys-dg812g"/><path class="jkuojibnm"/><path class="fmlaifbpn"/></g>`,
		"fallback": "iconmind:pallet-outline-bold",
	});
}

export default Component;
