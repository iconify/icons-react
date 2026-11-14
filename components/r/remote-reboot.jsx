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

.ns0c7bbfw {
  d: path("M6.875 3.5h10.25A4.375 4.375 0 0 1 21.5 7.875v4.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 12.125v-4.25A4.375 4.375 0 0 1 6.875 3.5M12 16.5v4m-4 0h8");
}

.ozh69nb8u {
  d: path("M15 10.5a3 3 0 1 1-3-3");
}

.t3p3tgxzb {
  d: path("M10.75 6.25L12 7.5l-1.25 1.25");
}
</style><g class="hntgybcog"><path class="ns0c7bbfw"/><path class="ozh69nb8u"/><path class="t3p3tgxzb"/></g>`,
		"fallback": "uix:remote-reboot",
	});
}

export default Component;
