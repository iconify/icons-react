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
		"content": `<style>.c-lzd2y4y {
  d: path("M8.5 7.5v2a3.5 3.5 0 0 0 7 0v-2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yat2y3b4p {
  d: path("m12 2.5l7.5 2.75V11c0 5-3 8.5-7.5 10.5c-4.5-2-7.5-5.5-7.5-10.5V5.25Zm0 4v11");
}
</style><g class="hntgybcog"><path class="yat2y3b4p"/><path class="c-lzd2y4y"/></g>`,
		"fallback": "uix:psychologist-badge",
	});
}

export default Component;
