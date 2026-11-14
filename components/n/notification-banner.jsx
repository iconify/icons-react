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
		"content": `<style>.bd31zlbux {
  d: path("M12 10h6m-6 4h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v_e7rob0r {
  fill: currentColor;
  d: path("M5.75 12a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.yrzr6jb5x {
  d: path("M6.875 6h10.25a4.375 4.375 0 0 1 4.375 4.375v3.25A4.375 4.375 0 0 1 17.125 18H6.875A4.375 4.375 0 0 1 2.5 13.625v-3.25A4.375 4.375 0 0 1 6.875 6");
}
</style><g class="hntgybcog"><path class="yrzr6jb5x"/><path class="v_e7rob0r"/><path class="bd31zlbux"/></g>`,
		"fallback": "uix:notification-banner",
	});
}

export default Component;
