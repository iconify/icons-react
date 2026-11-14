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

.njkvcdh6k {
  d: path("m2.5 10.75l4-4H10l5.75 5.75a1.5 1.5 0 0 1-2 2l-2.25-2.25");
}

.o0g6eve4n {
  d: path("m21.5 10.75l-4-4h-5L10 9.25m-5 4.5l3.5 3.5h4");
}
</style><g class="hntgybcog"><path class="njkvcdh6k"/><path class="o0g6eve4n"/></g>`,
		"fallback": "uix:negotiator",
	});
}

export default Component;
