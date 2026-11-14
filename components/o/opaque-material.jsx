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
		"content": `<style>.lultqxbna {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17.125 3h1.75A2.625 2.625 0 0 1 21.5 5.625v12.75A2.625 2.625 0 0 1 18.875 21h-1.75a2.625 2.625 0 0 1-2.625-2.625V5.625A2.625 2.625 0 0 1 17.125 3M2.5 8H11M8.75 5.75L11 8l-2.25 2.25M2.5 16H11m-2.25-2.25L11 16l-2.25 2.25");
}
</style><path class="lultqxbna"/>`,
		"fallback": "uix:opaque-material",
	});
}

export default Component;
