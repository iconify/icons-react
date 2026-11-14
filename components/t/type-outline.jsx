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
		"content": `<style>.jbcs6l8jv {
  d: path("M10.25 13L12 8.25L13.75 13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wodz3xbms {
  d: path("m3.5 20.5l6.5-17h4l6.5 17h-4l-1.5-4H9l-1.5 4Z");
}
</style><g class="ulnmmdpxh"><path class="wodz3xbms"/><path class="jbcs6l8jv"/></g>`,
		"fallback": "uix-sharp:type-outline",
	});
}

export default Component;
