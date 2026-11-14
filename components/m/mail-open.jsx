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
		"content": `<style>.dlpk0pdin {
  d: path("m3.5 10.5l8.5 5l8.5-5");
}

.i0up1jxkc {
  d: path("m3 10l9-6l9 6v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i0up1jxkc"/><path class="dlpk0pdin"/></g>`,
		"fallback": "uix-sharp:mail-open",
	});
}

export default Component;
