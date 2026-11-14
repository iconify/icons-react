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
		"content": `<style>.z-b6debzh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 15.5l-4.5-6l2-6.5h5l2 6.5Zm0 0v-5M3.5 20q2.5-3 5 0t5 0t5 0");
}
</style><path class="z-b6debzh"/>`,
		"fallback": "uix:sign-here-tag",
	});
}

export default Component;
