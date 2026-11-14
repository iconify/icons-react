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
		"content": `<style>.d_s7yktpk {
  d: path("M6.5 21.5L8.5 9h7l2 12.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xwml3ikuu {
  d: path("M10 21.5V18a2 2 0 0 1 4 0v3.5M11 6.25c0-2.25 4-1.5 4-3.75");
}
</style><g class="ulnmmdpxh"><path class="d_s7yktpk"/><path class="xwml3ikuu"/></g>`,
		"fallback": "uix-sharp:lime-kiln",
	});
}

export default Component;
