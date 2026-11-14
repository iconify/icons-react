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
		"content": `<style>.cqjfh_btr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5V12a2 2 0 0 1 4 0v8.5m3 0V12a2 2 0 0 1 4 0v8.5m3 0V12a2 2 0 0 1 4 0v8.5m-14-7h3m4 0h3m-14-8a2 2 0 1 0 4 0a2 2 0 1 0-4 0m7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><path class="cqjfh_btr"/>`,
		"fallback": "uix:synchronized-skating",
	});
}

export default Component;
