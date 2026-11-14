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

.qdu-5abjo {
  d: path("M14 20v-4a2 2 0 0 1 2-2h4M8 11l2 2l4-4");
}

.upbcgobek {
  d: path("M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8l-6 6H6a2 2 0 0 1-2-2Z");
}
</style><g class="hntgybcog"><path class="upbcgobek"/><path class="qdu-5abjo"/></g>`,
		"fallback": "uix:note-check",
	});
}

export default Component;
