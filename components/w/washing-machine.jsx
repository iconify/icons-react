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
		"content": `<style>.etrfzibrz {
  d: path("M8 13.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm0-7h.01m2.99 0h5");
}

.izf0xb2-s {
  d: path("M4.5 3h15v18h-15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="izf0xb2-s"/><path class="etrfzibrz"/></g>`,
		"fallback": "uix-sharp:washing-machine",
	});
}

export default Component;
