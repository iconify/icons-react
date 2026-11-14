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
		"content": `<style>.h4p2jqpsn {
  d: path("M7 17h10v3.5M7 14h8.5a1.5 1.5 0 0 1 1.5 1.5V17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x9omiybac {
  d: path("M3.5 10.5L12 3.25l8.5 7.25v10h-17Zm3.5 2v8");
}
</style><g class="ulnmmdpxh"><path class="x9omiybac"/><path class="h4p2jqpsn"/></g>`,
		"fallback": "uix-sharp:pin-guesthouse",
	});
}

export default Component;
