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
		"content": `<style>.aet9i5ila {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 9L9 4h6l3.5 5v10a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2Zm0 0h13M9 4v5");
}
</style><path class="aet9i5ila"/>`,
		"fallback": "uix:milk-carton",
	});
}

export default Component;
