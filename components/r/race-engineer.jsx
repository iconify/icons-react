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
		"content": `<style>.banuui3ll {
  d: path("M16.5 10.5V9a6 6 0 0 0-12 0v3q0 2.5 2.5 2.5m8.5 0h6v7h-6Z");
}

.g45bl7o-o {
  d: path("M17 13.5h3v2h-3Z");
}

.qbrnmzbff {
  d: path("M7 9a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM3.5 21.5c0-3 3-4.75 7-4.75c.767 0 1.496.064 2.175.189");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qbrnmzbff"/><path class="banuui3ll"/><path class="g45bl7o-o"/></g>`,
		"fallback": "uix-sharp:race-engineer",
	});
}

export default Component;
