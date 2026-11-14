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
		"content": `<style>.b-ya87b0a {
  d: path("M12.75 3.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM12 7.5l-2.5 5L13 15l-1 4.5m-2.5-7L7 16H3.5");
}

.kak10_7ue {
  d: path("m7 11l4.5-2.5L15 11m1.5 10.5v-6.75m0 0H21l-1.25 2l1.25 2h-4.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b-ya87b0a"/><path class="kak10_7ue"/></g>`,
		"fallback": "uix-sharp:marathon",
	});
}

export default Component;
