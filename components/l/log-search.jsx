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
		"content": `<style>.odiyikvem {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5h.01M7 3.5h13.5M3.5 9h.01M7 9h10.5m-6 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0m7 3l3 3");
}
</style><path class="odiyikvem"/>`,
		"fallback": "uix:log-search",
	});
}

export default Component;
