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
		"content": `<style>.rk9rudbqo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 12a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0M12 6.5V3m0 14.5V21m-5.5-9H3m14.5 0H21m-5-4l2.25-2.25M8 8L5.75 5.75M16 16l2.25 2.25M8 16l-2.25 2.25M10.5 11h.01m2.99 2.5h.01");
}
</style><path class="rk9rudbqo"/>`,
		"fallback": "uix:virus",
	});
}

export default Component;
