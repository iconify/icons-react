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
		"content": `<style>.m7b5a1t7o {
  d: path("M14 5.75h-2.75a1.25 1.25 0 0 0 0 2.5h1.5a1.25 1.25 0 0 1 0 2.5H10m2-5.5v6M8.5 14h7m-7 2.75H13");
}

.mg2-xhbke {
  d: path("M5 2.5h14V21l-2.25-1.5L14.5 21L12 19.5L9.5 21l-2.25-1.5L5 21Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mg2-xhbke"/><path class="m7b5a1t7o"/></g>`,
		"fallback": "uix-sharp:legal-billing",
	});
}

export default Component;
