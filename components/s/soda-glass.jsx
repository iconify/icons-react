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
		"content": `<style>.djza3vh6f {
  d: path("M7.901 6h8.198a2.625 2.625 0 0 1 2.612 2.886l-.975 9.75A2.625 2.625 0 0 1 15.124 21H8.876a2.625 2.625 0 0 1-2.612-2.364l-.975-9.75A2.625 2.625 0 0 1 7.901 6M15 17.5l3.5-15m-13 6h13");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kxk9x5bsx {
  d: path("M10.25 11.25h1A1.75 1.75 0 0 1 13 13v1a1.75 1.75 0 0 1-1.75 1.75h-1A1.75 1.75 0 0 1 8.5 14v-1a1.75 1.75 0 0 1 1.75-1.75");
}
</style><g class="hntgybcog"><path class="djza3vh6f"/><path class="kxk9x5bsx"/></g>`,
		"fallback": "uix:soda-glass",
	});
}

export default Component;
