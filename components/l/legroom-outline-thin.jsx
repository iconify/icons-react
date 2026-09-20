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
		"content": `<style>.haq4atb7e {
  d: path("M6 2v11h12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q26t8cbjw {
  d: path("M9 17v3");
}

.taxmbub4q {
  d: path("M6 17h12");
}

.vg9r0qb2v {
  d: path("M15 17v3");
}
</style><g class="hntgybcog"><path class="haq4atb7e"/><path class="taxmbub4q"/><path class="q26t8cbjw"/><path class="vg9r0qb2v"/></g>`,
		"fallback": "iconmind:legroom-outline-thin",
	});
}

export default Component;
