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
		"content": `<style>.ko88usznn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17.364 4.699L6.339 8.914a1.5 1.5 0 0 0-.25 2.679l3.607 2.22a1.5 1.5 0 0 1 .491.491l2.22 3.607a1.5 1.5 0 0 0 2.679-.25l4.215-11.025a1.5 1.5 0 0 0-1.937-1.937M10 14L20.5 3.5");
}
</style><path class="ko88usznn"/>`,
		"fallback": "uix:publish-button",
	});
}

export default Component;
