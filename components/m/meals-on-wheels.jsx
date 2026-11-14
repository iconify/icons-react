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
		"content": `<style>.hsegy097s {
  d: path("M2.5 10h12v7h-12Zm12 2h4l3 3v2h-7");
}

.ma8-tnbus {
  d: path("M5 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM4 10a4.5 4.5 0 0 1 9 0M8.5 3v2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hsegy097s"/><path class="ma8-tnbus"/></g>`,
		"fallback": "uix-sharp:meals-on-wheels",
	});
}

export default Component;
