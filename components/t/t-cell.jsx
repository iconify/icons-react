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

.oibwx4bfy {
  d: path("M10.5 3.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m10 6.5l-2.5.25l.75-2.5M18 10.5l-1.5 1.25m-13-1.5l2.5.25L5.25 8M6 10.5l1.5 1.25");
}

.vfh9svb2t {
  d: path("M6 15.5a6 6 0 1 0 12 0a6 6 0 1 0-12 0M10.75 5L12 7.5L13.25 5M12 7.5v2");
}
</style><g class="hntgybcog"><path class="vfh9svb2t"/><path class="oibwx4bfy"/></g>`,
		"fallback": "uix:t-cell",
	});
}

export default Component;
