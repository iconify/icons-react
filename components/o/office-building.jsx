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
		"content": `<style>.f10_10mlr {
  d: path("M6.75 21.25a2 2 0 0 1-2-2v-9.5a2 2 0 0 1 2-2h1.5v-2a2 2 0 0 1 2-2h3.5a2 2 0 0 1 2 2v2h1.5a2 2 0 0 1 2 2v9.5a2 2 0 0 1-2 2Zm1.5-10v3.5m3.75-3.5v3.5m3.75-3.5v3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.la4yn1b5e {
  d: path("M10 21.25v-3h4v3");
}
</style><g class="hntgybcog"><path class="f10_10mlr"/><path class="la4yn1b5e"/></g>`,
		"fallback": "iconoven:office-building",
	});
}

export default Component;
