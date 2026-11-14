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
		"content": `<style>.bm-o2zbcj {
  d: path("M11.25 16.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.d8f50ccnu {
  d: path("M3.5 7a3 3 0 1 0 6 0a3 3 0 1 0-6 0m11 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-12 13c0-3.75 1.75-6 4-6c.6 0 1.1.1 1.5.25M21.5 20c0-3.75-1.75-6-4-6c-.6 0-1.1.1-1.5.25M8.75 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="d8f50ccnu"/><path class="bm-o2zbcj"/></g>`,
		"fallback": "uix:life-couple-cover",
	});
}

export default Component;
