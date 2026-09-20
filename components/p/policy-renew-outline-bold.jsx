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
		"content": `<style>.ajw5g_mzy {
  d: path("M10.5 9.5 13 12l-2.5 2.5");
}

.pz3wsjbwy {
  d: path("M14.5 9.5 17 12l-2.5 2.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wuvisubmw {
  d: path("M8 3v18");
}

.y4_6s7b5v {
  d: path("M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="y4_6s7b5v"/><path class="wuvisubmw"/><path class="ajw5g_mzy"/><path class="pz3wsjbwy"/></g>`,
		"fallback": "iconmind:policy-renew-outline-bold",
	});
}

export default Component;
