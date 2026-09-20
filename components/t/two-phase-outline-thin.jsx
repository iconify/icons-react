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
		"content": `<style>.h9i3bw3au {
  d: path("m5 8 2 2 3.5 -3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n6_f133dv {
  d: path("m5 16 2 2 3.5 -3.5");
}

.upuk2bbmi {
  d: path("M15.5 5H18v14h-2.5");
}
</style><g class="hntgybcog"><path class="h9i3bw3au"/><path class="n6_f133dv"/><path class="upuk2bbmi"/></g>`,
		"fallback": "iconmind:two-phase-outline-thin",
	});
}

export default Component;
