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
		"content": `<style>.eczutjtvu {
  d: path("M5 13h10");
}

.p3-3c1i1b {
  d: path("M19 5v7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.viv5gg8xx {
  d: path("M2 4a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.ze8z1jbtg {
  d: path("M5 8h10");
}
</style><g class="s0phu2bbs"><path class="viv5gg8xx"/><path class="ze8z1jbtg"/><path class="eczutjtvu"/><path class="p3-3c1i1b"/></g>`,
		"fallback": "iconmind:scrollbar-outline-bold",
	});
}

export default Component;
