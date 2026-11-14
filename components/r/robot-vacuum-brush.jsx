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
		"content": `<style>.bix35ybqr {
  d: path("M3 8v3a9 3.5 0 0 0 18 0V8M5 17.25h14v3H5Z");
}

.bp7wkccig {
  d: path("M3 8a9 3.5 0 1 0 18 0A9 3.5 0 1 0 3 8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bp7wkccig"/><path class="bix35ybqr"/></g>`,
		"fallback": "uix-sharp:robot-vacuum-brush",
	});
}

export default Component;
