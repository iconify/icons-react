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
		"content": `<style>.bt_e7-bew {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 19C3 19 3 9 7 6c2-1.5 8-1.5 10 0c4 3 4 13 0 13c-2 0-2-5-5-5s-3 5-5 5");
}
</style><path class="bt_e7-bew"/>`,
		"fallback": "uix:neck-pillow",
	});
}

export default Component;
