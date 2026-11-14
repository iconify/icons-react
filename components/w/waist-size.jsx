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
		"content": `<style>.ces43tbbl {
  d: path("M7.5 11a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm2.5 7h11.5m0-2v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yv2w9nkie {
  d: path("M3 11a7 7 0 1 0 14 0a7 7 0 1 0-14 0Z");
}
</style><g class="ulnmmdpxh"><path class="yv2w9nkie"/><path class="ces43tbbl"/></g>`,
		"fallback": "uix-sharp:waist-size",
	});
}

export default Component;
