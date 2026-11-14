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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v372jr48x {
  d: path("m12 2.5l8 3V11c0 5-3.5 8.75-8 10.5C7.5 19.75 4 16 4 11V5.5ZM9 15.75L15 8");
}

.x1hpu4mmt {
  d: path("M7 9a1.75 1.75 0 1 0 3.5 0A1.75 1.75 0 1 0 7 9Zm6.5 5.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="v372jr48x"/><path class="x1hpu4mmt"/></g>`,
		"fallback": "uix-sharp:interest-cover",
	});
}

export default Component;
