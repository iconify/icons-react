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
		"content": `<style>.bb7inz33j {
  d: path("M13.5 5a2 2 0 0 1 2 -2H20a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-4.5a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hnwta_3qv {
  d: path("M2 5a2 2 0 0 1 2 -2h4.5a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.i_yso9n_l {
  fill: currentColor;
  d: path("M13.5 5a2 2 0 0 1 2 -2H20a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-4.5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nqnw98byf {
  d: path("M2 14h20");
}

.y-3f6qb0q {
  fill: currentColor;
  d: path("M2 5a2 2 0 0 1 2 -2h4.5a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ydpr20bza {
  d: path("m7 18 3 3 7 -7");
}
</style><g class="hntgybcog"><path class="y-3f6qb0q"/><path class="i_yso9n_l"/><path class="hnwta_3qv"/><path class="bb7inz33j"/><path class="nqnw98byf"/><path class="ydpr20bza"/></g>`,
		"fallback": "iconmind:tcp-duotone-thin",
	});
}

export default Component;
