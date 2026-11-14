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

.upbcgobek {
  d: path("M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8l-6 6H6a2 2 0 0 1-2-2Z");
}

.wusmgfp7b {
  d: path("M14 20v-4a2 2 0 0 1 2-2h4m-9-6v6m-3-3h6");
}
</style><g class="hntgybcog"><path class="upbcgobek"/><path class="wusmgfp7b"/></g>`,
		"fallback": "uix:note-plus",
	});
}

export default Component;
