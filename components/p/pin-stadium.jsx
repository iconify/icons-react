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

.u5cqcmbhg {
  d: path("M10 4.5h4a7.5 7.5 0 0 1 7.5 7.5a7.5 7.5 0 0 1-7.5 7.5h-4A7.5 7.5 0 0 1 2.5 12A7.5 7.5 0 0 1 10 4.5");
}

.w0sxxboip {
  d: path("M10 7.5h4a4.5 4.5 0 0 1 4.5 4.5a4.5 4.5 0 0 1-4.5 4.5h-4A4.5 4.5 0 0 1 5.5 12A4.5 4.5 0 0 1 10 7.5m2 0v9");
}
</style><g class="hntgybcog"><path class="u5cqcmbhg"/><path class="w0sxxboip"/></g>`,
		"fallback": "uix:pin-stadium",
	});
}

export default Component;
