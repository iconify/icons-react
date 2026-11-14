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
		"content": `<style>.ew2-sdb6v {
  d: path("M2.5 21q9.5-8 19 0M7.75 11a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm5.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM9.5 20.25h.01m4.99 0h.01");
}

.g8xqzj5sl {
  d: path("M6.5 18.25V15A1.5 1.5 0 0 1 5 13.5v-3a7 7 0 0 1 14 0v3a1.5 1.5 0 0 1-1.5 1.5v3.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g8xqzj5sl"/><path class="ew2-sdb6v"/></g>`,
		"fallback": "uix-sharp:skull-archaeology",
	});
}

export default Component;
