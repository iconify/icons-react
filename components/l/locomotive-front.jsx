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
		"content": `<style>.frjnuhbxx {
  d: path("M4.5 19.5v-11a5 5 0 0 1 5-5h5a5 5 0 0 1 5 5v11Z");
}

.i4ywq3bup {
  d: path("M7.5 6.5h9v4h-9Zm2.75 8.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM8 19.5l-2 2m10-2l2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="frjnuhbxx"/><path class="i4ywq3bup"/></g>`,
		"fallback": "uix-sharp:locomotive-front",
	});
}

export default Component;
