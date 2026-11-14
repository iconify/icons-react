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
		"content": `<style>.b5v327f3q {
  d: path("M3 20V7l4-2.5L11 6l4-2.5l6 3V20Z");
}

.qkxt6wb5o {
  d: path("M3 11c3-1.5 6 1.5 9 0s6 1.5 9 0M3 15.5c3-1.5 6 1.5 9 0s6 1.5 9 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b5v327f3q"/><path class="qkxt6wb5o"/></g>`,
		"fallback": "uix-sharp:rock-layers",
	});
}

export default Component;
