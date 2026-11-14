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
		"content": `<style>.eo43fxtwk {
  d: path("m10 9.5l5 2.5l-5 2.5Z");
}

.k6lzdw25c {
  d: path("M3 4.5q9 4.5 18 0v15q-9-4.5-18 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k6lzdw25c"/><path class="eo43fxtwk"/></g>`,
		"fallback": "uix-sharp:video-180",
	});
}

export default Component;
