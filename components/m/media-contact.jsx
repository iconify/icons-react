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
		"content": `<style>.dh53dhb8s {
  d: path("M6.5 9.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM5.25 20v-2a3.25 3.25 0 0 1 6.5 0v2m2.75-10h4m-4 4H17");
}

.hneliqdkn {
  d: path("M2.5 4h19v16h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hneliqdkn"/><path class="dh53dhb8s"/></g>`,
		"fallback": "uix-sharp:media-contact",
	});
}

export default Component;
