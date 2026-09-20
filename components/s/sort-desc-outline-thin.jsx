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

.k4qo1xe9v {
  d: path("M4 6h16");
}

.vybq366mg {
  d: path("M4 18h6");
}

.xlekzhbnl {
  d: path("M4 12h11");
}
</style><g class="hntgybcog"><path class="k4qo1xe9v"/><path class="xlekzhbnl"/><path class="vybq366mg"/></g>`,
		"fallback": "iconmind:sort-desc-outline-thin",
	});
}

export default Component;
