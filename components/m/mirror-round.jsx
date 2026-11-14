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
		"content": `<style>.ha9xtnb5j {
  d: path("M4 13a8 8 0 1 0 16 0a8 8 0 1 0-16 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.koea7bc5n {
  d: path("m7.25 6.5l4.75-4l4.75 4M7 13a5 5 0 1 0 10 0a5 5 0 1 0-10 0m3.5 0l2-2");
}
</style><g class="hntgybcog"><path class="ha9xtnb5j"/><path class="koea7bc5n"/></g>`,
		"fallback": "uix:mirror-round",
	});
}

export default Component;
