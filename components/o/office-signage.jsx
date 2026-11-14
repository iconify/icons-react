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
		"content": `<style>.anvw7138m {
  d: path("m8 12.5l-2 2l2 2m-2-2h4.5m5.5-2l2 2l-2 2m2-2h-4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p3repqj7l {
  d: path("M6 9.75h12a3.5 3.5 0 0 1 3.5 3.5v2.5a3.5 3.5 0 0 1-3.5 3.5H6a3.5 3.5 0 0 1-3.5-3.5v-2.5A3.5 3.5 0 0 1 6 9.75m1 0l5-5.25l5 5.25");
}
</style><g class="hntgybcog"><path class="p3repqj7l"/><path class="anvw7138m"/></g>`,
		"fallback": "uix:office-signage",
	});
}

export default Component;
