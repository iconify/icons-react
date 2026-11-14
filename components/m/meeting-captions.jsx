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

.iwmyaxv-z {
  d: path("M6.875 3h10.25A4.375 4.375 0 0 1 21.5 7.375v9.25A4.375 4.375 0 0 1 17.125 21H6.875A4.375 4.375 0 0 1 2.5 16.625v-9.25A4.375 4.375 0 0 1 6.875 3");
}

.w1vf-jvrp {
  d: path("M9.75 8a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M6.5 15h11m-9 3h7");
}
</style><g class="hntgybcog"><path class="iwmyaxv-z"/><path class="w1vf-jvrp"/></g>`,
		"fallback": "uix:meeting-captions",
	});
}

export default Component;
