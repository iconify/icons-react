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
		"content": `<style>.q7cjfybkj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 3h2.5A1.75 1.75 0 0 1 15 4.75v2.5A1.75 1.75 0 0 0 16.75 9h2.5A1.75 1.75 0 0 1 21 10.75v2.5A1.75 1.75 0 0 1 19.25 15h-2.5A1.75 1.75 0 0 0 15 16.75v2.5A1.75 1.75 0 0 1 13.25 21h-2.5A1.75 1.75 0 0 1 9 19.25v-2.5A1.75 1.75 0 0 0 7.25 15h-2.5A1.75 1.75 0 0 1 3 13.25v-2.5A1.75 1.75 0 0 1 4.75 9h2.5A1.75 1.75 0 0 0 9 7.25v-2.5A1.75 1.75 0 0 1 10.75 3M12 9.25v5.5M9.25 12h5.5");
}
</style><path class="q7cjfybkj"/>`,
		"fallback": "uix:pin-doctor",
	});
}

export default Component;
