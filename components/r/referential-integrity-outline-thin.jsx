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
		"content": `<style>.b_3lf0wwh {
  d: path("M2 8a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.f2vh026ub {
  d: path("M10 9h4");
}

.fkf_gcbra {
  d: path("M10 15h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.moemtk9nb {
  d: path("M14 8a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="b_3lf0wwh"/><path class="moemtk9nb"/><path class="f2vh026ub"/><path class="fkf_gcbra"/></g>`,
		"fallback": "iconmind:referential-integrity-outline-thin",
	});
}

export default Component;
