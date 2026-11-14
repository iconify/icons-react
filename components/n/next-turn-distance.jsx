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
		"content": `<style>.g9lvtqbpj {
  d: path("M7 15V9.5a3 3 0 0 1 3-3h8.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jm2oulh-q {
  d: path("M15.25 3.25L18.5 6.5l-3.25 3.25M4 17.75V21m0-1.75h16m0-1.5V21");
}
</style><g class="hntgybcog"><path class="g9lvtqbpj"/><path class="jm2oulh-q"/></g>`,
		"fallback": "uix:next-turn-distance",
	});
}

export default Component;
