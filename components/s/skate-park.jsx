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
		"content": `<style>.n47dn7bud {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M21.5 19h-19v-9h7a9 9 0 0 0 9 9M3 6.75l.75.75h4.5L9 6.75M4.75 9h.01m2.49 0h.01");
}
</style><path class="n47dn7bud"/>`,
		"fallback": "uix:skate-park",
	});
}

export default Component;
