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
		"content": `<style>.acyg6nb1v {
  d: path("M10 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nmwfltbst {
  d: path("m3 16 3 -3 3 3 3 -3 3 3 3 -3 3 3");
}
</style><g class="hntgybcog"><path class="acyg6nb1v"/><path class="nmwfltbst"/></g>`,
		"fallback": "iconmind:uncertainty-outline-thin",
	});
}

export default Component;
