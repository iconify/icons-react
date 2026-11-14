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
		"content": `<style>.u52i39d1f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.375 9h1.25A4.375 4.375 0 0 1 17 13.375v3.75a4.375 4.375 0 0 1-4.375 4.375h-1.25A4.375 4.375 0 0 1 7 17.125v-3.75A4.375 4.375 0 0 1 11.375 9M12 9V5.5m-3 0h8.5m-7-2.75h.01");
}
</style><path class="u52i39d1f"/>`,
		"fallback": "uix:shower-gel",
	});
}

export default Component;
