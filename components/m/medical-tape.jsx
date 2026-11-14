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
		"content": `<style>.e6tbivszl {
  d: path("M2.5 11.5a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0Z");
}

.sb-7ussaf {
  d: path("M7 11.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm3 7.5h11.5v-3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e6tbivszl"/><path class="sb-7ussaf"/></g>`,
		"fallback": "uix-sharp:medical-tape",
	});
}

export default Component;
