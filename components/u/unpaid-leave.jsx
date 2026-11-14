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
		"content": `<style>.ga8kqb22o {
  d: path("M10 6.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 0h3.5M9.25 15a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m.5 2.75l4.5-5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q1yf41bdr {
  d: path("M10 2.5h4A3.5 3.5 0 0 1 17.5 6v12a3.5 3.5 0 0 1-3.5 3.5h-4A3.5 3.5 0 0 1 6.5 18V6A3.5 3.5 0 0 1 10 2.5");
}
</style><g class="hntgybcog"><path class="q1yf41bdr"/><path class="ga8kqb22o"/></g>`,
		"fallback": "uix:unpaid-leave",
	});
}

export default Component;
