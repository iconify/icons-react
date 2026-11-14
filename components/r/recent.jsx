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

.ofy07xbzb {
  d: path("M6 3v3h3m3 1.5V12l3 2");
}

.vyt9i_-zs {
  d: path("M3.5 12A8.5 8.5 0 1 0 6 6");
}
</style><g class="hntgybcog"><path class="vyt9i_-zs"/><path class="ofy07xbzb"/></g>`,
		"fallback": "uix:recent",
	});
}

export default Component;
