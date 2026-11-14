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
		"content": `<style>.u3-nttb4n {
  d: path("M14.25 9a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM3 17l5-5l4 4l2.5-2.5L21 20");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w7mc2oblu {
  d: path("M3 4h18v16H3Z");
}
</style><g class="ulnmmdpxh"><path class="w7mc2oblu"/><path class="u3-nttb4n"/></g>`,
		"fallback": "uix-sharp:listing-photos",
	});
}

export default Component;
