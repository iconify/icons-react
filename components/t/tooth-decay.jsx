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

.jiaw7ac5a {
  d: path("M7 3C4.5 3 3.5 5 3.5 7.5c0 3 1.5 4.5 2 6.5l1 5.5c.25 1.5 2.25 1.5 2.5 0l1.25-4c.5-1.5 3-1.5 3.5 0l1.25 4c.25 1.5 2.25 1.5 2.5 0l1-5.5c.5-2 2-3.5 2-6.5C20.5 5 19.5 3 17 3c-2 0-3 1-5 1S9 3 7 3");
}

.jlmhchb-q {
  d: path("M10 9.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="jiaw7ac5a"/><path class="jlmhchb-q"/></g>`,
		"fallback": "uix:tooth-decay",
	});
}

export default Component;
