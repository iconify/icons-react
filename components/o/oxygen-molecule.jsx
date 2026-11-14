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
		"content": `<style>.z-kq5q41q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m9 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m-2.25-1.75h4.5m-4.5 3.5h4.5");
}
</style><path class="z-kq5q41q"/>`,
		"fallback": "uix:oxygen-molecule",
	});
}

export default Component;
