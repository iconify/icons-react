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

.nwoenz10b {
  d: path("M6 7a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.tr5xbnn7q {
  d: path("M10 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2-2V4M9.5 6.5l2.5-3l2.5 3M12 14l4.5-2.5v-2m0-3zA1.5 1.5 0 0 1 18 8a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 15 8a1.5 1.5 0 0 1 1.5-1.5M12 12L7.5 9.5v-1");
}
</style><g class="hntgybcog"><path class="tr5xbnn7q"/><path class="nwoenz10b"/></g>`,
		"fallback": "uix:usb",
	});
}

export default Component;
