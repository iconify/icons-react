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
		"content": `<style>.hfes3fb8p {
  d: path("M13.875 9.5h3.25a4.375 4.375 0 0 1 4.375 4.375v3.25a4.375 4.375 0 0 1-4.375 4.375h-3.25A4.375 4.375 0 0 1 9.5 17.125v-3.25A4.375 4.375 0 0 1 13.875 9.5M6 6.5h5m2 11h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ych-q_bow {
  d: path("M6.875 2.5h3.25A4.375 4.375 0 0 1 14.5 6.875v3.25a4.375 4.375 0 0 1-4.375 4.375h-3.25A4.375 4.375 0 0 1 2.5 10.125v-3.25A4.375 4.375 0 0 1 6.875 2.5");
}
</style><g class="hntgybcog"><path class="ych-q_bow"/><path class="hfes3fb8p"/></g>`,
		"fallback": "uix:post-collab",
	});
}

export default Component;
