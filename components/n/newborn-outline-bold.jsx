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

.f8efap2_b {
  d: path("M5 21a7 7 0 0 1 14 0Z");
}

.nl66y9men {
  d: path("M6 16h12");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="ddr0zpdgr"/><path class="f8efap2_b"/><path class="nl66y9men"/></g>`,
		"fallback": "iconmind:newborn-outline-bold",
	});
}

export default Component;
