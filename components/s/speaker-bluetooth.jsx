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
		"content": `<style>.c85j5tb5h {
  d: path("M9.375 2.5h5.25A4.375 4.375 0 0 1 19 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-5.25A4.375 4.375 0 0 1 5 17.125V6.875A4.375 4.375 0 0 1 9.375 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v2295ioyg {
  d: path("M9 16a3 3 0 1 0 6 0a3 3 0 1 0-6 0m1.5-10.5l3 2.75l-1.5 1.5v-6l1.5 1.5l-3 2.75");
}
</style><g class="hntgybcog"><path class="c85j5tb5h"/><path class="v2295ioyg"/></g>`,
		"fallback": "uix:speaker-bluetooth",
	});
}

export default Component;
