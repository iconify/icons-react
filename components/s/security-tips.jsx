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
		"content": `<style>.bb5hijb1a {
  d: path("m9.75 10l1.75 1.75l3-3.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xo6vk9i6m {
  d: path("M9 17v-1.5c-2-1.3-3-3.3-3-5.5a6 6 0 0 1 12 0c0 2.2-1 4.2-3 5.5V17Zm.5 2.5h5m-4 2h3");
}
</style><g class="hntgybcog"><path class="xo6vk9i6m"/><path class="bb5hijb1a"/></g>`,
		"fallback": "uix:security-tips",
	});
}

export default Component;
