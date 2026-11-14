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

.ksgslz7wm {
  d: path("M2.5 4.5C2.5 3.67 3.17 3 4 3h10.5c.83 0 1.5.67 1.5 1.5V11c0 .83-.67 1.5-1.5 1.5h-7l-3 2.5v-2.5H4c-.83 0-1.5-.67-1.5-1.5Z");
}

.v7e-7gb3s {
  d: path("M18.75 7.5H20c.83 0 1.5.67 1.5 1.5v6.5c0 .83-.67 1.5-1.5 1.5h-.5v3L16 17h-6c-.83 0-1.5-.67-1.5-1.5v-.25");
}
</style><g class="hntgybcog"><path class="ksgslz7wm"/><path class="v7e-7gb3s"/></g>`,
		"fallback": "uix:repo-discussions",
	});
}

export default Component;
