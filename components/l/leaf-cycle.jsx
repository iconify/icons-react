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

.koso6ebyl {
  d: path("M2.75 5.75h3v3M8.5 15.5c0-4.5 2.5-7 7-7c0 4.5-2.5 7-7 7m0 0l4-4");
}

.s9u-ywozo {
  d: path("M18.364 5.636a9 9 0 1 1-12.728 0");
}
</style><g class="hntgybcog"><path class="s9u-ywozo"/><path class="koso6ebyl"/></g>`,
		"fallback": "uix:leaf-cycle",
	});
}

export default Component;
