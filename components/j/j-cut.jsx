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
		"content": `<style>.rac1gbbgk {
  d: path("M8.5 3h13v9h-13Zm-6 12h15v6h-15Z");
}

.ti5lrd6kk {
  d: path("M13.5 5.75L17 7.5l-3.5 1.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rac1gbbgk"/><path class="ti5lrd6kk"/></g>`,
		"fallback": "uix-sharp:j-cut",
	});
}

export default Component;
