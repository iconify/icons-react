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
		"content": `<style>.p1ykhfepk {
  d: path("m9 9l3 11.75L15 9");
}

.ru4tp72_w {
  d: path("M7 3.5h10L21.5 9L12 21L2.5 9ZM2.5 9h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ru4tp72_w"/><path class="p1ykhfepk"/></g>`,
		"fallback": "uix-sharp:usp",
	});
}

export default Component;
