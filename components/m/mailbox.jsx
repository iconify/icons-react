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
		"content": `<style>.a3tujfboi {
  d: path("M7.5 7h9a4.5 4.5 0 0 1 4.5 4.5V18H3v-6.5A4.5 4.5 0 0 1 7.5 7");
}

.d19wpd14k {
  d: path("M7.5 7a4.5 4.5 0 0 1 4.5 4.5V18m3.5-7V3.5H19v3h-3.5M12 18v3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="a3tujfboi"/><path class="d19wpd14k"/></g>`,
		"fallback": "uix:mailbox",
	});
}

export default Component;
