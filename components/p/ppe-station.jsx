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
		"content": `<style>.swf7gnbxb {
  d: path("M3.5 2.5h17v19h-17Zm0 4.5h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yb79v5xdl {
  d: path("M6.5 16.5h1a4.5 4.5 0 0 1 9 0h1Z");
}
</style><g class="ulnmmdpxh"><path class="swf7gnbxb"/><path class="yb79v5xdl"/></g>`,
		"fallback": "uix-sharp:ppe-station",
	});
}

export default Component;
