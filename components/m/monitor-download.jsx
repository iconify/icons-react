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
		"content": `<style>.l6oz-khek {
  d: path("M2.5 3.5h19v13h-19Zm9.5 13v4m-4 0h8m-4-14V12");
}

.nqrh00bso {
  d: path("M9.75 9.75L12 12l2.25-2.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l6oz-khek"/><path class="nqrh00bso"/></g>`,
		"fallback": "uix-sharp:monitor-download",
	});
}

export default Component;
