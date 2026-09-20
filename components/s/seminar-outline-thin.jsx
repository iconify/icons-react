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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k74vnib1e {
  d: path("M3 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.nqnw98byf {
  d: path("M2 14h20");
}

.ptubxntjf {
  d: path("M15 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.qdn88l2uv {
  d: path("M7 20h10");
}

.w08657bnd {
  d: path("M9 5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="hntgybcog"><path class="k74vnib1e"/><path class="w08657bnd"/><path class="ptubxntjf"/><path class="nqnw98byf"/><path class="qdn88l2uv"/></g>`,
		"fallback": "iconmind:seminar-outline-thin",
	});
}

export default Component;
