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
		"content": `<style>.cprxzwnkx {
  d: path("M7 2.5h7l5 5v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r-4r278dp {
  d: path("M14 2.5v5h5m-11 10l2.75-3.5L13 16l3-4.5");
}
</style><g class="hntgybcog"><path class="cprxzwnkx"/><path class="r-4r278dp"/></g>`,
		"fallback": "uix:research-paper-science",
	});
}

export default Component;
