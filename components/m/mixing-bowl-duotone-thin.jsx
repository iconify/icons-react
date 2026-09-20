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
		"content": `<style>.fyvf420mr {
  d: path("M4 11h16c0 5 -4 9 -8 9s-8 -4 -8 -9");
}

.gu4_cx-8v {
  fill: currentColor;
  d: path("M4 11h16c0 5 -4 9 -8 9s-8 -4 -8 -9");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hexwpfn3j {
  d: path("m15 12 6 -6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="gu4_cx-8v"/><path class="fyvf420mr"/><path class="hexwpfn3j"/></g>`,
		"fallback": "iconmind:mixing-bowl-duotone-thin",
	});
}

export default Component;
