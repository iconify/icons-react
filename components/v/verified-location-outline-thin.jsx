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

.qad3kqbgr {
  d: path("M4 10a8 8 0 0 1 16 0l-8 8Z");
}

.ylnxs8amf {
  d: path("m8 12 2 2 6 -6");
}
</style><g class="hntgybcog"><path class="qad3kqbgr"/><path class="ylnxs8amf"/></g>`,
		"fallback": "iconmind:verified-location-outline-thin",
	});
}

export default Component;
