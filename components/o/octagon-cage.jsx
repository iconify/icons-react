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
		"content": `<style>.sdgqmabiu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 21.5H8.25L2.5 15.75v-7.5L8.25 2.5h7.5l5.75 5.75v7.5l-5.75 5.75H14m-4 0v-2.75m4 2.75v-2.75");
}
</style><path class="sdgqmabiu"/>`,
		"fallback": "uix:octagon-cage",
	});
}

export default Component;
