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
		"content": `<style>.sbcszkbht {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 9h1a3.5 3.5 0 0 1 3.5 3.5A3.5 3.5 0 0 1 7 16H6a3.5 3.5 0 0 1-3.5-3.5A3.5 3.5 0 0 1 6 9m11 0h1a3.5 3.5 0 0 1 3.5 3.5A3.5 3.5 0 0 1 18 16h-1a3.5 3.5 0 0 1-3.5-3.5A3.5 3.5 0 0 1 17 9m-6.5 2.5h3M12 6h.01");
}
</style><path class="sbcszkbht"/>`,
		"fallback": "uix:smart-glasses-camera",
	});
}

export default Component;
