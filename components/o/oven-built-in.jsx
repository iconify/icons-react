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
		"content": `<style>.j_issmbrn {
  d: path("M7.5 12h9v5.5h-9ZM8 6.5h.01m3.99 0h.01");
}

.tdt260b1g {
  d: path("M4 4h16v16H4Zm0 5h16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tdt260b1g"/><path class="j_issmbrn"/></g>`,
		"fallback": "uix-sharp:oven-built-in",
	});
}

export default Component;
