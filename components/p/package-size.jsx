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
		"content": `<style>.bbty41fhy {
  d: path("m12 2.5l8 4v7l-8 4l-8-4v-7Z");
}

.czugb3f-q {
  d: path("m4 6.5l8 4l8-4m-8 4v7m-8 3h16M4 19v3m16-3v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bbty41fhy"/><path class="czugb3f-q"/></g>`,
		"fallback": "uix-sharp:package-size",
	});
}

export default Component;
