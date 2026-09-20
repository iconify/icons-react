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
		"content": `<style>.bn_pu6j-z {
  d: path("M20 7v13H4V4h5l3 3h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k6_u5abjl {
  fill: currentColor;
  d: path("M9 10.5h3l3 3 -3 3H9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.q866-it_d {
  d: path("M9 10.5h3l3 3 -3 3H9Z");
}

.r0jamibkm {
  fill: currentColor;
  d: path("M20 7v13H4V4h5l3 3h4");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="r0jamibkm"/><path class="k6_u5abjl"/><path class="bn_pu6j-z"/><path class="q866-it_d"/></g>`,
		"fallback": "iconmind:purpose-tag-duotone-thin",
	});
}

export default Component;
