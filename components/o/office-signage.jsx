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
		"content": `<style>.anvw7138m {
  d: path("m8 12.5l-2 2l2 2m-2-2h4.5m5.5-2l2 2l-2 2m2-2h-4.5");
}

.pyb1-gt5y {
  d: path("M2.5 9.75h19v9.5h-19Zm4.5 0l5-5.25l5 5.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pyb1-gt5y"/><path class="anvw7138m"/></g>`,
		"fallback": "uix-sharp:office-signage",
	});
}

export default Component;
