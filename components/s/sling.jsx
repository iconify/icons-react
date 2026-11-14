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
		"content": `<style>.h6j8knffq {
  d: path("M4 20c0-3.25 3.5-5.5 8-5.5s8 2.25 8 5.5c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1ZM8 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}

.kb36b9f2y {
  d: path("m7 15.25l10.5 3.5l-10 1.75Zm7.25-.5l3.25 4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h6j8knffq"/><path class="kb36b9f2y"/></g>`,
		"fallback": "uix-sharp:sling",
	});
}

export default Component;
