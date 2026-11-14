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
		"content": `<style>.aznk4nb_m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4.5h17V21h-17Zm4.5-2v4m8-4v4m-12.5 3h17M7 14.25h10M7 13v2.5M17 13v2.5m-9 2.75h.01m3.99 0h.01m3.99 0h.01");
}
</style><path class="aznk4nb_m"/>`,
		"fallback": "uix-sharp:statement-date-range",
	});
}

export default Component;
