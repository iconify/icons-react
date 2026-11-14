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
		"content": `<style>.fsux02bpt {
  d: path("M12 14c-2 0-3.5-1.25-3.5-3.5c2 0 3.5 1.25 3.5 3.5Zm0-2c2 0 3.5-1.25 3.5-3.5c-2 0-3.5 1.25-3.5 3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y1czhjrxr {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Zm9.5 5v-7");
}
</style><g class="ulnmmdpxh"><path class="y1czhjrxr"/><path class="fsux02bpt"/></g>`,
		"fallback": "uix-sharp:vegan-mark",
	});
}

export default Component;
