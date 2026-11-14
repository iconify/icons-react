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
		"content": `<style>.a8oaoopxi {
  d: path("M7.25 8.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0ZM7 18.25L8.5 21l1.5-2.75m4.75-.25l2 2L21 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vjs4mwbfx {
  d: path("M8.5 2.5c3.5 2 4 5.5 4 9v4h-8v-4c0-3.5.5-7 4-9Zm-4 9l-2 2.5v2.5l2-1m8-4l2 2.5v.298m-1.43 1.487l-.57-.285");
}
</style><g class="ulnmmdpxh"><path class="vjs4mwbfx"/><path class="a8oaoopxi"/></g>`,
		"fallback": "uix-sharp:rocket-check",
	});
}

export default Component;
