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
		"content": `<style>.rwfoi5hxf {
  d: path("M8.5 11.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-6 5h19M6 20h10m.25-13.25L21.5 2.5");
}

.sps7n8xqc {
  d: path("M5 16.5a7.5 7.5 0 1 1 12 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sps7n8xqc"/><path class="rwfoi5hxf"/></g>`,
		"fallback": "uix-sharp:tube-towing",
	});
}

export default Component;
