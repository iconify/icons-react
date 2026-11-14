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

.ky2f7t9jd {
  d: path("m11.75 19.25l1.75-1.75l1.75 1.75");
}

.p9cwjedbk {
  d: path("M9.234 18H2.5V9l4 2.5V9l4 2.5v-9h3v12.166m4-1.166a4 4 0 1 1-4 4");
}
</style><g class="hntgybcog"><path class="p9cwjedbk"/><path class="ky2f7t9jd"/></g>`,
		"fallback": "uix:recovery-facility",
	});
}

export default Component;
