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
		"content": `<style>.czulu5orc {
  d: path("M2.5 6q9.5 4 19 0v12q-9.5-4-19 0Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r1a8-rxeo {
  d: path("M2.5 15L8 10.5l4 3l3.5-2.5l6 4.5");
}
</style><g class="hntgybcog"><path class="czulu5orc"/><path class="r1a8-rxeo"/></g>`,
		"fallback": "uix:landscape-view",
	});
}

export default Component;
