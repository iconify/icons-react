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

.jsjy4xbwp {
  d: path("M7 7.75h.75a1.5 1.5 0 0 1 1.5 1.5v2.5a1.5 1.5 0 0 1-1.5 1.5H7a1.5 1.5 0 0 1-1.5-1.5v-2.5A1.5 1.5 0 0 1 7 7.75m9.25 0H17a1.5 1.5 0 0 1 1.5 1.5v2.5a1.5 1.5 0 0 1-1.5 1.5h-.75a1.5 1.5 0 0 1-1.5-1.5v-2.5a1.5 1.5 0 0 1 1.5-1.5");
}

.wp7oc8b9j {
  d: path("M2.5 4.5h6A3.5 3.5 0 0 1 12 8v12.5A2.5 2.5 0 0 0 9.5 18h-7Zm19 0h-6A3.5 3.5 0 0 0 12 8v12.5a2.5 2.5 0 0 1 2.5-2.5h7Z");
}
</style><g class="hntgybcog"><path class="wp7oc8b9j"/><path class="jsjy4xbwp"/></g>`,
		"fallback": "uix:photo-album-open",
	});
}

export default Component;
