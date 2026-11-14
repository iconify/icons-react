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

.jcj58450t {
  d: path("M4 8.5h16V18a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 18Zm0 0l-1.5-5h5m12.5 5l1.5-5h-5");
}

.jskqodb1q {
  d: path("m9.5 11.5l-2.75 3l2.75 3m5-6l2.75 3l-2.75 3");
}
</style><g class="hntgybcog"><path class="jcj58450t"/><path class="jskqodb1q"/></g>`,
		"fallback": "uix:open-source",
	});
}

export default Component;
