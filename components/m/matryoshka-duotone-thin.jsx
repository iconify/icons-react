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

.k_2z93bzc {
  fill: currentColor;
  d: path("M11 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.l5k4yiboy {
  fill: currentColor;
  d: path("m12 3 9 9 -9 9 -9 -9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.n3p0zmbop {
  d: path("M11 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.ra5uied2u {
  d: path("m12 7.5 4.5 4.5 -4.5 4.5L7.5 12Z");
}

.tngfrxbch {
  fill: currentColor;
  d: path("m12 7.5 4.5 4.5 -4.5 4.5L7.5 12Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.x6ma3nbxt {
  d: path("m12 3 9 9 -9 9 -9 -9Z");
}
</style><g class="hntgybcog"><path class="l5k4yiboy"/><path class="tngfrxbch"/><path class="k_2z93bzc"/><path class="x6ma3nbxt"/><path class="ra5uied2u"/><path class="n3p0zmbop"/></g>`,
		"fallback": "iconmind:matryoshka-duotone-thin",
	});
}

export default Component;
