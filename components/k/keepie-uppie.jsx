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
		"content": `<style>.ijgw-ybed {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 21.5L8.5 14H15a2 2 0 0 1 0 4h-4.5l-3 3.5m4.5-16a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m.25 5.75A6.5 6.5 0 0 1 9 5.5");
}
</style><path class="ijgw-ybed"/>`,
		"fallback": "uix:keepie-uppie",
	});
}

export default Component;
