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
		"content": `<style>.e0vgxjylc {
  d: path("M3 12q3-10.125 6 0t6 0t6 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xqupxoqvf {
  d: path("M3 17c1.25 0 2.25-2.5 3-5q3-10.125 6 0t6 0c.75-2.5 1.75-5 3-5");
}
</style><g class="ulnmmdpxh"><path class="e0vgxjylc"/><path class="xqupxoqvf"/></g>`,
		"fallback": "uix-sharp:wave-interference",
	});
}

export default Component;
