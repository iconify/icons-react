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

.lzeqgwzpp {
  d: path("M11.5 7v5.5H17");
}

.otdr30y9l {
  d: path("M11 4H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-6m1-10l-9.5 9.5");
}
</style><g class="hntgybcog"><path class="otdr30y9l"/><path class="lzeqgwzpp"/></g>`,
		"fallback": "uix:open-in-app",
	});
}

export default Component;
