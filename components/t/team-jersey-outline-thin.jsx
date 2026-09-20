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

.x4nz41duv {
  d: path("m3 9 5 -5h8l5 5 -4 4v7H7v-7Z");
}

.z55i2tbmp {
  d: path("m9 4 3 3 3 -3");
}
</style><g class="hntgybcog"><path class="x4nz41duv"/><path class="z55i2tbmp"/></g>`,
		"fallback": "iconmind:team-jersey-outline-thin",
	});
}

export default Component;
