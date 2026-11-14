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
		"content": `<style>.ajuhwd_4t {
  d: path("M5 2.5h14V21l-2.25-1.5L14.5 21L12 19.5L9.5 21l-2.25-1.5L5 21Zm3.5 4h7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xp0qvvi4q {
  d: path("M7.5 9.75h9v3.5h-9Zm1 6.75h5");
}
</style><g class="ulnmmdpxh"><path class="ajuhwd_4t"/><path class="xp0qvvi4q"/></g>`,
		"fallback": "uix-sharp:invoice-line-item",
	});
}

export default Component;
