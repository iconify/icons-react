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
		"content": `<style>.l8fgk_-ug {
  d: path("M5 4v15.5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4");
}

.luijxcbwv {
  d: path("M8.5 2.5h7v16h-7Zm0 4.5h7m-7 3.5h7m-7 3.5h7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l8fgk_-ug"/><path class="luijxcbwv"/></g>`,
		"fallback": "uix-sharp:vacuum-filter",
	});
}

export default Component;
