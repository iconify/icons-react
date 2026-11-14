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
		"content": `<style>.jm-s96bza {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 3h11l-.25 2.5q.75 1.5 0 3L16 21H8L6.75 8.5q-.75-1.5 0-3Z");
}
</style><path class="jm-s96bza"/>`,
		"fallback": "uix:pint-glass",
	});
}

export default Component;
