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
		"content": `<style>.aspvd7blo {
  d: path("M9.625 8h4.75A2.625 2.625 0 0 1 17 10.625v2.75A2.625 2.625 0 0 1 14.375 16h-4.75A2.625 2.625 0 0 1 7 13.375v-2.75A2.625 2.625 0 0 1 9.625 8");
}

.g-brwyb-v {
  d: path("M6.875 3.5h10.25A4.375 4.375 0 0 1 21.5 7.875v8.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 16.125v-8.25A4.375 4.375 0 0 1 6.875 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="g-brwyb-v"/><path class="aspvd7blo"/></g>`,
		"fallback": "uix:open-in-modal",
	});
}

export default Component;
