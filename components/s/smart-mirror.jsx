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
		"content": `<style>.cqb0ueb4z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12a4.75 9.5 0 1 0 9.5 0a4.75 9.5 0 1 0-9.5 0m3.25 3.5h3m-3-6.25l2.5-2.5m6 10.5a5.3 5.3 0 0 1 7.5 0M16 19a2.83 2.83 0 0 1 4 0m-2 2h.01");
}
</style><path class="cqb0ueb4z"/>`,
		"fallback": "uix:smart-mirror",
	});
}

export default Component;
