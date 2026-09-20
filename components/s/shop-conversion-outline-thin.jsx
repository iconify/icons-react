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
		"content": `<style>.fa5_klbta {
  d: path("M13.5 17.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o3jwr8bmt {
  d: path("m9 18 6 -6");
}

.tp7101bon {
  d: path("M2 5h20M2 5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0");
}

.v9tp15bnh {
  d: path("M8.5 12.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.yb0d-pkkp {
  d: path("M4 8v14h16V8");
}
</style><g class="hntgybcog"><path class="tp7101bon"/><path class="yb0d-pkkp"/><path class="v9tp15bnh"/><path class="o3jwr8bmt"/><path class="fa5_klbta"/></g>`,
		"fallback": "iconmind:shop-conversion-outline-thin",
	});
}

export default Component;
