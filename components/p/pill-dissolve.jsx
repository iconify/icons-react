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
		"content": `<style>.g8rh203rg {
  d: path("M5.5 3v16.5a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V3m-13 2.5h13m-8 3.5h.01m2.99 2.5h.01");
}

.tg46hyb-b {
  d: path("m8.582 16.132l5.639-2.053l1.197 3.289l-5.639 2.053Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g8rh203rg"/><path class="tg46hyb-b"/></g>`,
		"fallback": "uix-sharp:pill-dissolve",
	});
}

export default Component;
