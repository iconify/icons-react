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
		"content": `<style>.apkup8b8d {
  d: path("M6.5 3h11c0 3-1.5 5.25-3.5 6h-4c-2-.75-3.5-3-3.5-6M4 9h16m-8 0v2.75m-5.359 0h10.718a2.625 2.625 0 0 1 2.571 2.098l.923 4.5a2.625 2.625 0 0 1-2.571 3.152H5.718a2.625 2.625 0 0 1-2.571-3.152l.923-4.5a2.625 2.625 0 0 1 2.571-2.098");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.plksdhbjo {
  d: path("M10 16.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="apkup8b8d"/><path class="plksdhbjo"/></g>`,
		"fallback": "uix:tare-weight",
	});
}

export default Component;
