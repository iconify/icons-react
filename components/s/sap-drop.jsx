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
		"content": `<style>.p6dyy_axj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 3h15.5a1.75 1.75 0 0 1 1.75 1.75a1.75 1.75 0 0 1-1.75 1.75H4.25A1.75 1.75 0 0 1 2.5 4.75A1.75 1.75 0 0 1 4.25 3M12 6.5c0 3.5 4.5 6 4.5 10a4.5 4.5 0 0 1-9 0c0-4 4.5-6.5 4.5-10M10.5 17h.01");
}
</style><path class="p6dyy_axj"/>`,
		"fallback": "uix:sap-drop",
	});
}

export default Component;
