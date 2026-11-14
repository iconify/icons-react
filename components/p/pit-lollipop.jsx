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
		"content": `<style>.yequtdbqi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 8.5a6 6 0 1 0 12 0a6 6 0 1 0-12 0m6 6v7m-3-13h6m-6 13h6");
}
</style><path class="yequtdbqi"/>`,
		"fallback": "uix:pit-lollipop",
	});
}

export default Component;
