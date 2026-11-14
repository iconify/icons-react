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

.ip9_wgbok {
  d: path("m12.75 16.25l5.25-2.5a1.5 1.5 0 0 1 1.75 2.5l-6 4.25H2.5");
}

.tgrrbqyab {
  d: path("M9.5 10.5c0-5 2.25-7 7-7c0 5-2.25 7-7 7m-7 4h3l3.25-1.25h3.75a1.5 1.5 0 0 1 0 3H9.75");
}
</style><g class="hntgybcog"><path class="tgrrbqyab"/><path class="ip9_wgbok"/></g>`,
		"fallback": "uix:leaf-hand",
	});
}

export default Component;
