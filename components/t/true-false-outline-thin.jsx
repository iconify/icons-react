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
		"content": `<style>.brz3--krt {
  d: path("m15 14 4 4");
}

.dt6t4bcmu {
  d: path("m5 8 2 2 4 -4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n8z3lbl9h {
  d: path("m19 14 -4 4");
}

.u5rn05amy {
  d: path("M3 4h8v8H3Z");
}

.v99mbcczu {
  d: path("M13 12h8v8h-8Z");
}
</style><g class="hntgybcog"><path class="u5rn05amy"/><path class="dt6t4bcmu"/><path class="v99mbcczu"/><path class="brz3--krt"/><path class="n8z3lbl9h"/></g>`,
		"fallback": "iconmind:true-false-outline-thin",
	});
}

export default Component;
