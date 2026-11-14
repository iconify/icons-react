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

.uh485ej3m {
  d: path("M15.5 20.5V11l-7-7");
}

.zka8x3hob {
  d: path("M8.5 9.5V4H14");
}
</style><g class="hntgybcog"><path class="uh485ej3m"/><path class="zka8x3hob"/></g>`,
		"fallback": "uix:turn-slight-left",
	});
}

export default Component;
