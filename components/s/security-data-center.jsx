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
		"content": `<style>.b7iczsbvb {
  d: path("M4 5.5C4 4 7.6 2.75 12 2.75S20 4 20 5.5v13c0 1.5-3.6 2.75-8 2.75S4 20 4 18.5Z");
}

.s47k4abef {
  d: path("M4 5.5C4 7 7.6 8.25 12 8.25S20 7 20 5.5M4 12c0 1.5 3.6 2.75 8 2.75s8-1.25 8-2.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b7iczsbvb"/><path class="s47k4abef"/></g>`,
		"fallback": "uix-sharp:security-data-center",
	});
}

export default Component;
