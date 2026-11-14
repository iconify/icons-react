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
		"content": `<style>.hnn-3acht {
  d: path("M7 9V4h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.im8pqbq2f {
  d: path("M15.5 21v-8.5L7 4");
}
</style><g class="hntgybcog"><path class="im8pqbq2f"/><path class="hnn-3acht"/></g>`,
		"fallback": "uix:lane-arrow-slight-left",
	});
}

export default Component;
