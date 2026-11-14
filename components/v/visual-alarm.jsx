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
		"content": `<style>.n27usmb8g {
  d: path("M6.5 17v-4a5.5 5.5 0 0 1 11 0v4m-13 0h15v3.5h-15ZM12 2.5v2m-8 1L5.5 7M20 5.5L18.5 7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zsg3pacwm {
  d: path("m12.5 9.5l-2 4H13l-1.5 3Z");
}
</style><g class="ulnmmdpxh"><path class="n27usmb8g"/><path class="zsg3pacwm"/></g>`,
		"fallback": "uix-sharp:visual-alarm",
	});
}

export default Component;
