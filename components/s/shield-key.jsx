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

.hnvnn0bgl {
  d: path("m12 2.75l7.5 2.75v6c0 4.7-3.1 8-7.5 9.75c-4.4-1.75-7.5-5.05-7.5-9.75v-6Z");
}

.i8tczccln {
  d: path("M10 8.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2 2v5.75m0-2.25h1.75");
}
</style><g class="hntgybcog"><path class="hnvnn0bgl"/><path class="i8tczccln"/></g>`,
		"fallback": "uix:shield-key",
	});
}

export default Component;
