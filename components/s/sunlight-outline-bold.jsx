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
		"content": `<style>.ddr0zpdgr {
  d: path("M8 6a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.lkivjibuo {
  d: path("M12 13v7");
}

.q4rhaacat {
  d: path("m16 13 4 4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uix68becb {
  d: path("m8 13 -4 4");
}
</style><g class="s0phu2bbs"><path class="ddr0zpdgr"/><path class="uix68becb"/><path class="lkivjibuo"/><path class="q4rhaacat"/></g>`,
		"fallback": "iconmind:sunlight-outline-bold",
	});
}

export default Component;
