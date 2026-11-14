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
		"content": `<style>.bipjcgbra {
  fill: currentColor;
  d: path("M7 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.jxs_2zb1y {
  d: path("M2.5 6h13v12h-13Zm13 4l6-3v10l-6-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jxs_2zb1y"/><path class="bipjcgbra"/></g>`,
		"fallback": "uix-sharp:video-record",
	});
}

export default Component;
