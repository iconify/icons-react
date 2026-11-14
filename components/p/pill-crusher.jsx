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

.mpb62g_8u {
  d: path("M3.5 11H7m9.5 0h4a8.5 8.5 0 0 1-17 0");
}

.vqdudabsr {
  d: path("m10.464 8.811l4.597-4.597a1.75 1.75 0 0 1 2.475 0a1.75 1.75 0 0 1 0 2.475l-4.597 4.597a1.75 1.75 0 0 1-2.475 0a1.75 1.75 0 0 1 0-2.475");
}
</style><g class="hntgybcog"><path class="mpb62g_8u"/><path class="vqdudabsr"/></g>`,
		"fallback": "uix:pill-crusher",
	});
}

export default Component;
