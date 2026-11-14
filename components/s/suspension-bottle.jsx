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
		"content": `<style>.mwzon8b1c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 5V3.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75V5Zm.5 0Q7 6.5 7 9v10.5A1.5 1.5 0 0 0 8.5 21h7a1.5 1.5 0 0 0 1.5-1.5V9q0-2.5-2.5-4M10 17.5h.01m3.99 0h.01M4 9q-1.5 3 0 6m16-6q1.5 3 0 6");
}
</style><path class="mwzon8b1c"/>`,
		"fallback": "uix-sharp:suspension-bottle",
	});
}

export default Component;
