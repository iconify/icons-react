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
		"content": `<style>.ac4p_wikp {
  d: path("M14 9h7v5a3.5 3.5 0 0 1 -7 0Z");
}

.c9e-6nb7q {
  fill: currentColor;
  d: path("M3 9h7v5a3.5 3.5 0 0 1 -7 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.f2vh026ub {
  d: path("M10 9h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.op8wvfbgm {
  fill: currentColor;
  d: path("M14 9h7v5a3.5 3.5 0 0 1 -7 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.tc3rjukod {
  d: path("M3 9h7v5a3.5 3.5 0 0 1 -7 0Z");
}
</style><g class="hntgybcog"><path class="c9e-6nb7q"/><path class="op8wvfbgm"/><path class="tc3rjukod"/><path class="ac4p_wikp"/><path class="f2vh026ub"/></g>`,
		"fallback": "iconmind:sunglasses-duotone-thin",
	});
}

export default Component;
