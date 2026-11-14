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
		"content": `<style>.cxndkcbwi {
  d: path("M3 8.5h11v7H3Z");
}

.g9eieoh3z {
  d: path("M5.5 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm8.5 0h7m-3 0v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cxndkcbwi"/><path class="g9eieoh3z"/></g>`,
		"fallback": "uix-sharp:twofa-hardware-key",
	});
}

export default Component;
