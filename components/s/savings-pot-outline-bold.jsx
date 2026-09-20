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

.ikiprn9sq {
  d: path("M9 14h6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ul0m4fbfe {
  d: path("M9 17.5h6");
}
</style><g class="s0phu2bbs"><path class="g_k4bub3x"/><path class="guw4_4ovg"/><path class="ikiprn9sq"/><path class="ul0m4fbfe"/></g>`,
		"fallback": "iconmind:savings-pot-outline-bold",
	});
}

export default Component;
