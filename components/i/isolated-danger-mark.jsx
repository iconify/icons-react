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
		"content": `<style>.l3jxa-bpr {
  fill: currentColor;
  d: path("M10.5 3.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm0 6a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.py984hb-m {
  d: path("M7 14h10l-2 4H9Zm5-3v3m-9 7h18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="py984hb-m"/><path class="l3jxa-bpr"/></g>`,
		"fallback": "uix-sharp:isolated-danger-mark",
	});
}

export default Component;
