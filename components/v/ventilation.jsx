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
		"content": `<style>.a7ylabcql {
  d: path("M12 10.25a2.5 2.25 90 0 1 0-5a2.5 2.25 90 0 1 0 5M13.5 13a2.5 2.25 30 0 1 4.25 2.5A2.5 2.25 30 0 1 13.5 13");
}

.b1giyo3pl {
  d: path("M6.875 2.5h10.25A4.375 4.375 0 0 1 21.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 17.125V6.875A4.375 4.375 0 0 1 6.875 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t08wuz0fb {
  d: path("M10.25 12a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.zh7ck_htz {
  d: path("M10.5 13a2.5 2.25 150 0 0-4.25 2.5A2.5 2.25 150 0 0 10.5 13");
}
</style><g class="hntgybcog"><path class="b1giyo3pl"/><path class="t08wuz0fb"/><path class="a7ylabcql"/><path class="zh7ck_htz"/></g>`,
		"fallback": "uix:ventilation",
	});
}

export default Component;
