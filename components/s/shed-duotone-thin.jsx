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
		"content": `<style>.a6e_o0bju {
  d: path("m3 11 9 -9 9 9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l_k_j9beu {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m3 11 9 -9 9 9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mw750eb1l {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M10 20v-6h4v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pyq_xcb9j {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M5 11v9h14v-9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qkzndobnz {
  d: path("M10 20v-6h4v6");
}

.sv8lhpyik {
  d: path("M5 11v9h14v-9");
}
</style><g class="hntgybcog"><path class="l_k_j9beu"/><path class="pyq_xcb9j"/><path class="mw750eb1l"/><path class="a6e_o0bju"/><path class="sv8lhpyik"/><path class="qkzndobnz"/></g>`,
		"fallback": "iconmind:shed-duotone-thin",
	});
}

export default Component;
