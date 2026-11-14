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

.kwd6tdbsf {
  d: path("M3.5 7.5L12 3l8.5 4.5v9L12 21l-8.5-4.5Z");
}

.u8054pfip {
  d: path("M3.5 7.5L12 12l8.5-4.5M12 12v9");
}
</style><g class="hntgybcog"><path class="kwd6tdbsf"/><path class="u8054pfip"/></g>`,
		"fallback": "uix:product-3d",
	});
}

export default Component;
