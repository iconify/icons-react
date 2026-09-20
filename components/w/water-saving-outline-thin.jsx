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

.mepevqbwl {
  d: path("m12 4 6 6a6 6 0 0 1 -12 0Z");
}

.u363cab-y {
  d: path("M5 19 19 5");
}
</style><g class="hntgybcog"><path class="mepevqbwl"/><path class="u363cab-y"/></g>`,
		"fallback": "iconmind:water-saving-outline-thin",
	});
}

export default Component;
