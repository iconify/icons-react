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

.obdhrqbem {
  d: path("M4.5 5.5h10a5 5 0 0 1 0 10h-6");
}

.zvrid2nje {
  d: path("m11.5 18.5l-3-3l3-3");
}
</style><g class="hntgybcog"><path class="obdhrqbem"/><path class="zvrid2nje"/></g>`,
		"fallback": "uix:u-turn-down",
	});
}

export default Component;
