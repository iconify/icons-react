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
		"content": `<style>.h9yvmub8g {
  d: path("M4.5 3.5V14a5.5 5.5 0 0 0 11 0V3.5");
}

.r10uzdh1b {
  d: path("m12 7l3.5-3.5L19 7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h9yvmub8g"/><path class="r10uzdh1b"/></g>`,
		"fallback": "uix-sharp:u-turn-up",
	});
}

export default Component;
