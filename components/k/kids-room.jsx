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
		"content": `<style>.onrzwnbmw {
  d: path("M3 6.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm12.5 0a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm-6.25 5.25h.01m5.49 0h.01M9 16.25a3 2.25 0 1 0 6 0a3 2.25 0 1 0-6 0Zm3-.75h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yxn0cwbom {
  d: path("M4.5 13.5a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0Z");
}
</style><g class="ulnmmdpxh"><path class="yxn0cwbom"/><path class="onrzwnbmw"/></g>`,
		"fallback": "uix-sharp:kids-room",
	});
}

export default Component;
