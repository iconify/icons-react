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

.q1bxsco5j {
  d: path("M2.5 14a9.5 3.5 0 0 0 19 0");
}

.v2-c9yb3h {
  d: path("M2.5 11a9.5 3.5 0 1 0 19 0a9.5 3.5 0 1 0-19 0");
}

.wrzhaubou {
  d: path("M2.5 11v6a9.5 3.5 0 0 0 19 0v-6M7 8V3l3 1.25L7 5.5M17 8V3l3 1.25l-3 1.25");
}
</style><g class="hntgybcog"><path class="v2-c9yb3h"/><path class="wrzhaubou"/><path class="q1bxsco5j"/></g>`,
		"fallback": "uix:stadium",
	});
}

export default Component;
