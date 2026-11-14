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

.kz9r-6bsx {
  d: path("M9.5 2.5h5A3.5 3.5 0 0 1 18 6v12a3.5 3.5 0 0 1-3.5 3.5h-5A3.5 3.5 0 0 1 6 18V6a3.5 3.5 0 0 1 3.5-3.5");
}

.zbi238bfj {
  d: path("M14.089 8.01a3.25 3.25 0 1 1-4.178 0M12 6.25v4");
}
</style><g class="hntgybcog"><path class="kz9r-6bsx"/><path class="zbi238bfj"/></g>`,
		"fallback": "uix:pc-tower-power",
	});
}

export default Component;
