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
		"content": `<style>.aihkw_bqx {
  d: path("M7 21.5V10a4 4 0 0 1 8 0v7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rjnbwsbax {
  d: path("m12 14l3 3l3-3M2.5 2.5v19m19-19v19");
}
</style><g class="hntgybcog"><path class="aihkw_bqx"/><path class="rjnbwsbax"/></g>`,
		"fallback": "uix:u-turn-bay",
	});
}

export default Component;
