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
		"content": `<style>.eveaq_b5o {
  d: path("M8.25 2.75h7.5v8h-7.5z");
}

.osbxmfqcc {
  d: path("M10.25 6.75L11.5 8l2.25-2.5m-10 7.75h16.5v8H3.75zm4.5 3.5h7.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="eveaq_b5o"/><path class="osbxmfqcc"/></g>`,
		"fallback": "iconoven:vote-sharp",
	});
}

export default Component;
