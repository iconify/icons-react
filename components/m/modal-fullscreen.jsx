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

.igz7pobrs {
  d: path("M7 10.5v-3h3m7 6v3h-3");
}

.z0wll3bik {
  d: path("M7.375 3.5h9.25A4.375 4.375 0 0 1 21 7.875v8.25a4.375 4.375 0 0 1-4.375 4.375h-9.25A4.375 4.375 0 0 1 3 16.125v-8.25A4.375 4.375 0 0 1 7.375 3.5");
}
</style><g class="hntgybcog"><path class="z0wll3bik"/><path class="igz7pobrs"/></g>`,
		"fallback": "uix:modal-fullscreen",
	});
}

export default Component;
