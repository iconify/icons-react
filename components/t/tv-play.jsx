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
		"content": `<style>.gzc-2r5ic {
  d: path("M2.5 6.5h19V20h-19Zm5.5-4l4 4l4-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z0twsq58c {
  d: path("m10.5 10.5l4.5 2.75L10.5 16Z");
}
</style><g class="ulnmmdpxh"><path class="gzc-2r5ic"/><path class="z0twsq58c"/></g>`,
		"fallback": "uix-sharp:tv-play",
	});
}

export default Component;
