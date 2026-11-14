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

.oko11v-0c {
  d: path("M7 8H4.5a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2H13a2 2 0 0 0 2-2V15");
}

.znkinhbqf {
  d: path("M12.625 3h6.25A2.625 2.625 0 0 1 21.5 5.625v3.75A2.625 2.625 0 0 1 18.875 12h-6.25A2.625 2.625 0 0 1 10 9.375v-3.75A2.625 2.625 0 0 1 12.625 3M5.5 17.5l3.25-3.25m-2.5 0h2.5v2.5");
}
</style><g class="hntgybcog"><path class="oko11v-0c"/><path class="znkinhbqf"/></g>`,
		"fallback": "uix:pop-out",
	});
}

export default Component;
