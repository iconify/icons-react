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
		"content": `<style>.bg_wpbcgo {
  d: path("M11 15a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.kpspt_bpo {
  d: path("M7 8h10");
}

.lx30vib3e {
  d: path("m18 18 3 3");
}

.p8yct170k {
  d: path("M7 12h6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.y4_6s7b5v {
  d: path("M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="y4_6s7b5v"/><path class="kpspt_bpo"/><path class="p8yct170k"/><path class="bg_wpbcgo"/><path class="lx30vib3e"/></g>`,
		"fallback": "iconmind:revision-outline-bold",
	});
}

export default Component;
