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
		"content": `<style>.cv_ersfws {
  d: path("M12 2.5zA3.5 3.5 0 0 1 15.5 6v6a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 12V6A3.5 3.5 0 0 1 12 2.5m-8 0v19m16-19v19");
}

.e2rr2ne1q {
  d: path("M8.5 7q3.5-1.5 7 0m-7 4.5q3.5 1.25 7 0m-1.379 6.121a3 3 0 0 1-4.242 0m5.978 2.475a6 6 0 0 1-7.714 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="cv_ersfws"/><path class="e2rr2ne1q"/></g>`,
		"fallback": "uix:park-assist",
	});
}

export default Component;
