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
		"content": `<style>.i2e6f4bsy {
  d: path("m12 11.5l1 2.5h2.5l-2 1.75l.75 2.5l-2.25-1.5l-2.25 1.5l.75-2.5l-2-1.75H11Z");
}

.m2myy79hx {
  d: path("M3 21.5V12a9 9 0 0 1 18 0v9.5h-3.5V12a5.5 5.5 0 0 0-11 0v9.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m2myy79hx"/><path class="i2e6f4bsy"/></g>`,
		"fallback": "uix-sharp:mounted-police",
	});
}

export default Component;
