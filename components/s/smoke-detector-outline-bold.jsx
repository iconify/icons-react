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
		"content": `<style>.fmlaifbpn {
  d: path("M12 16v4");
}

.lqcp5xb1v {
  d: path("M4 3h16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tx4z1wb0w {
  d: path("M5 6h14v5a7 7 0 0 1 -14 0Z");
}

.we3axlb2u {
  d: path("M11 10a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.zm2dyvb-o {
  d: path("M9 16h6");
}
</style><g class="s0phu2bbs"><path class="lqcp5xb1v"/><path class="tx4z1wb0w"/><path class="we3axlb2u"/><path class="zm2dyvb-o"/><path class="fmlaifbpn"/></g>`,
		"fallback": "iconmind:smoke-detector-outline-bold",
	});
}

export default Component;
