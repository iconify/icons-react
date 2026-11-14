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
		"content": `<style>.bxj70duwp {
  d: path("M8 2.5c-2.75 0-4 2-4 4.75c0 2.5 1.5 4 2 5.75l.5 2.5h2l1.25-3.25c.5-1 4-1 4.5 0l1.25 3.25c.25 1 1.5 1 1.75 0L18 13c.5-1.75 2-3.25 2-5.75c0-2.75-1.25-4.75-4-4.75c-1.5 0-2.5 1-4 1s-2.5-1-4-1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l-7xl334j {
  d: path("M4.5 18.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><g class="hntgybcog"><path class="bxj70duwp"/><path class="l-7xl334j"/></g>`,
		"fallback": "uix:tooth-abscess",
	});
}

export default Component;
