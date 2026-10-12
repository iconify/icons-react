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

.mb1owyh4q {
  d: path("M5.25 3.25h8.5a2.5 2.5 0 0 1 2.5 2.5v5.5a2.5 2.5 0 0 1-2.5 2.5H9.5l-3.6 3.1a.6.6 0 0 1-1-.45v-2.65a2.5 2.5 0 0 1-2.15-2.5v-5.5a2.5 2.5 0 0 1 2.5-2.5");
}

.rdvb9eb-l {
  d: path("m9 5.75l-2.5 2.5l2.5 2.5m-2.5-2.5h5a2 2 0 0 1 2 2V11m4.25 3.25q.42 3.08 3.5 3.5q-3.08.42-3.5 3.5q-.42-3.08-3.5-3.5q3.08-.42 3.5-3.5");
}
</style><g class="hntgybcog"><path class="mb1owyh4q"/><path class="rdvb9eb-l"/></g>`,
		"fallback": "iconoven:smart-reply",
	});
}

export default Component;
