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

.jhq1cxbmn {
  d: path("M14 20v-4a2 2 0 0 1 2-2h4m-6.172-6.328za1 1 0 0 1 0 1.414l-3.568 3.568a1.5 1.5 0 0 1-.766.41l-.439.088a.6.6 0 0 1-.707-.707l.088-.439a1.5 1.5 0 0 1 .41-.766l3.568-3.568a1 1 0 0 1 1.414 0");
}

.upbcgobek {
  d: path("M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8l-6 6H6a2 2 0 0 1-2-2Z");
}
</style><g class="hntgybcog"><path class="upbcgobek"/><path class="jhq1cxbmn"/></g>`,
		"fallback": "uix:note-edit",
	});
}

export default Component;
