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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iucs7l-9n {
  d: path("M2.5 11.5a8 8 0 1 0 16 0a8 8 0 1 0-16 0");
}

.k0w8urnyu {
  d: path("M10.5 19.5h11l-2-3h-2.75M7 11.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0");
}
</style><g class="hntgybcog"><path class="iucs7l-9n"/><path class="k0w8urnyu"/></g>`,
		"fallback": "uix:sports-tape",
	});
}

export default Component;
