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
		"content": `<style>.ewpklhbkw {
  d: path("m3.25 9l4.5-4.5l4.5 4.5v11h-9Z");
}

.obuv2kbnf {
  d: path("M6.25 10.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm9-1a4.5 4.5 0 0 1 0 7m3-9.5a7 7 0 0 1 0 11");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ewpklhbkw"/><path class="obuv2kbnf"/></g>`,
		"fallback": "uix-sharp:rfid",
	});
}

export default Component;
