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
		"content": `<style>.g_k4bub3x {
  d: path("M6 9h12v10a3 3 0 0 1 -3 3H9a3 3 0 0 1 -3 -3Z");
}

.guw4_4ovg {
  d: path("M8 9V4h8v5");
}

.la-twzbff {
  d: path("M12 12.5v6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.z4to5ssqg {
  d: path("m9.5 15 2.5 -2.5 2.5 2.5");
}
</style><g class="s0phu2bbs"><path class="g_k4bub3x"/><path class="guw4_4ovg"/><path class="la-twzbff"/><path class="z4to5ssqg"/></g>`,
		"fallback": "iconmind:round-up-savings-outline-bold",
	});
}

export default Component;
