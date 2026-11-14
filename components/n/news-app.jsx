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

.j81d7yndt {
  d: path("M10.375 2.5h3.25A4.375 4.375 0 0 1 18 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-3.25A4.375 4.375 0 0 1 6 17.125V6.875A4.375 4.375 0 0 1 10.375 2.5m.125 2.75h3");
}

.kmkl0ub4g {
  d: path("M10.75 8h2.5A1.75 1.75 0 0 1 15 9.75v.5A1.75 1.75 0 0 1 13.25 12h-2.5A1.75 1.75 0 0 1 9 10.25v-.5A1.75 1.75 0 0 1 10.75 8M9 15h6m-5.5 3h3");
}
</style><g class="hntgybcog"><path class="j81d7yndt"/><path class="kmkl0ub4g"/></g>`,
		"fallback": "uix:news-app",
	});
}

export default Component;
