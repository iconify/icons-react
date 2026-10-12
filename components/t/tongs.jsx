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
		"content": `<style>.sio1525yg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 4.75a2 2 0 0 1 4 0m-4 0l-4 13.5l2.25 2.5m5.75-16l4 13.5l-2.25 2.5");
}
</style><path class="sio1525yg"/>`,
		"fallback": "iconoven:tongs",
	});
}

export default Component;
