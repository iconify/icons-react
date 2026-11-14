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
		"content": `<style>.axy0p8bcj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 5.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM2.5 15c0-2.5 1.75-4 4-4s4 1.5 4 4m4.25-9.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM13.5 15c0-2.5 1.75-4 4-4s4 1.5 4 4M5 19.5h14m-2.25-2.25L19 19.5l-2.25 2.25");
}
</style><path class="axy0p8bcj"/>`,
		"fallback": "uix-sharp:lead-handoff",
	});
}

export default Component;
