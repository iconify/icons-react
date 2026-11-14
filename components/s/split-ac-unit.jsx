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
		"content": `<style>.oalivkywu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.875 4h10.25A4.375 4.375 0 0 1 21.5 8.375v.25A4.375 4.375 0 0 1 17.125 13H6.875A4.375 4.375 0 0 1 2.5 8.625v-.25A4.375 4.375 0 0 1 6.875 4M5 10.5h14M7.5 16l-1 3.5M12 16v3.5m4.5-3.5l1 3.5");
}
</style><path class="oalivkywu"/>`,
		"fallback": "uix:split-ac-unit",
	});
}

export default Component;
