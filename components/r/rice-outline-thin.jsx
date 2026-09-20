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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n04sz6gmp {
  d: path("M7 11a5 5 0 0 1 10 0");
}
</style><g class="hntgybcog"><path class="fyvf420mr"/><path class="n04sz6gmp"/></g>`,
		"fallback": "iconmind:rice-outline-thin",
	});
}

export default Component;
