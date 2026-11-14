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
		"content": `<style>.ko-4q6tim {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.5 3l4.5 8.5L16.5 3H19c0 4 .5 6 1 7v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9c.5-1 1-3 1-7ZM4 15.5h16");
}
</style><path class="ko-4q6tim"/>`,
		"fallback": "uix:taekwondo-chest-protector",
	});
}

export default Component;
