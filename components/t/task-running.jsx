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

.k6pxmcbbf {
  d: path("m13.313 3.258l5.602 3.234a2.63 2.63 0 0 1 1.312 2.274v6.468a2.63 2.63 0 0 1-1.312 2.274l-5.602 3.234a2.63 2.63 0 0 1-2.625 0l-5.603-3.234a2.63 2.63 0 0 1-1.312-2.274V8.766a2.63 2.63 0 0 1 1.312-2.274l5.603-3.234a2.63 2.63 0 0 1 2.625 0");
}

.wnlo0ubib {
  d: path("M12 7.75a4.25 4.25 0 0 1 3.256 1.518m.425 4.857a4.25 4.25 0 0 1-2.943 2.06m-4.419-2.06a4.25 4.25 0 0 1-.313-3.579");
}
</style><g class="hntgybcog"><path class="k6pxmcbbf"/><path class="wnlo0ubib"/></g>`,
		"fallback": "uix:task-running",
	});
}

export default Component;
