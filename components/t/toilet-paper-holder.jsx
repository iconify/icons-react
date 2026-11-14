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

.s-n66sb6w {
  d: path("M4 6v7m0-3.5h2.5m0 0a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0");
}

.zlbp31b1n {
  d: path("M19.5 9.5V21H13v-5m-2.25-6.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}
</style><g class="hntgybcog"><path class="s-n66sb6w"/><path class="zlbp31b1n"/></g>`,
		"fallback": "uix:toilet-paper-holder",
	});
}

export default Component;
