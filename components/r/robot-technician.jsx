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
		"content": `<style>.m-r56uhnd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.1 15.5H3v-11h12.5v9.6M9.25 2.5v2M6.75 10h.01m4.99 0h.01M19 14.5l-1.75 1.75l2.5 2.5L21.5 17m-3 .5l-3.25 3.25");
}
</style><path class="m-r56uhnd"/>`,
		"fallback": "uix-sharp:robot-technician",
	});
}

export default Component;
