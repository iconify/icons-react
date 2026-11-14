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
		"content": `<style>.p9tvl0byi {
  d: path("M10 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm0 5.5h.01m3.99 0h.01M10 16h.01M14 16h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xjy69308d {
  d: path("M7 2.5h10v19H7Z");
}
</style><g class="ulnmmdpxh"><path class="xjy69308d"/><path class="p9tvl0byi"/></g>`,
		"fallback": "uix-sharp:tv-remote",
	});
}

export default Component;
