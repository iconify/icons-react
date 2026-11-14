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

.t7jf9mcxl {
  d: path("M14 20v-4a2 2 0 0 1 2-2h4M9 9l4 4m0-4l-4 4");
}

.upbcgobek {
  d: path("M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8l-6 6H6a2 2 0 0 1-2-2Z");
}
</style><g class="hntgybcog"><path class="upbcgobek"/><path class="t7jf9mcxl"/></g>`,
		"fallback": "uix:note-x",
	});
}

export default Component;
