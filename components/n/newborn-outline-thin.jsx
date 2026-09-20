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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nl66y9men {
  d: path("M6 16h12");
}
</style><g class="hntgybcog"><path class="ddr0zpdgr"/><path class="f8efap2_b"/><path class="nl66y9men"/></g>`,
		"fallback": "iconmind:newborn-outline-thin",
	});
}

export default Component;
