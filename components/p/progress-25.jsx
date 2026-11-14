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

.lmbi0vuiy {
  d: path("M4.25 9h15.5a1.75 1.75 0 0 1 1.75 1.75v2.5A1.75 1.75 0 0 1 19.75 15H4.25a1.75 1.75 0 0 1-1.75-1.75v-2.5A1.75 1.75 0 0 1 4.25 9");
}

.o078d91rq {
  fill: currentColor;
  d: path("M7.25 9H3.5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3.75Z");
}
</style><g class="hntgybcog"><path class="lmbi0vuiy"/><path class="o078d91rq"/></g>`,
		"fallback": "uix:progress-25",
	});
}

export default Component;
