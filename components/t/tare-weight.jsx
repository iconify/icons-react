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
		"content": `<style>.lrcv07b5f {
  d: path("M6.5 3h11c0 3-1.5 5.25-3.5 6h-4c-2-.75-3.5-3-3.5-6ZM4 9h16m-8 0v2.75m-7.5 0h15l2 9.75h-19Z");
}

.n1cia05ds {
  d: path("M10 16.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lrcv07b5f"/><path class="n1cia05ds"/></g>`,
		"fallback": "uix-sharp:tare-weight",
	});
}

export default Component;
