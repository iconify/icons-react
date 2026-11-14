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
		"content": `<style>.jcmr5bcjh {
  d: path("M10 10.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM8.25 18.5c0-2 1.75-3 3.75-3s3.75 1 3.75 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x5sqeab5m {
  d: path("M5.5 2.5h13v19h-13ZM12 5.25h.01");
}
</style><g class="ulnmmdpxh"><path class="x5sqeab5m"/><path class="jcmr5bcjh"/></g>`,
		"fallback": "uix-sharp:selfie",
	});
}

export default Component;
