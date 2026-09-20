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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lqcp5xb1v {
  d: path("M4 3h16");
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
</style><g class="hntgybcog"><path class="lqcp5xb1v"/><path class="tx4z1wb0w"/><path class="we3axlb2u"/><path class="zm2dyvb-o"/><path class="fmlaifbpn"/></g>`,
		"fallback": "iconmind:smoke-detector-outline-thin",
	});
}

export default Component;
