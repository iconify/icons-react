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
		"content": `<style>.kspm7p2vy {
  d: path("M8.5 15.5c0-4.5 2.5-7 7-7c0 4.5-2.5 7-7 7Zm0 0l4-4");
}

.ozg5e6g1y {
  d: path("M20 12a3.25 3.25 0 0 1-2.25 5.75A3.25 3.25 0 0 1 12 20a3.25 3.25 0 0 1-5.75-2.25A3.25 3.25 0 0 1 4 12a3.25 3.25 0 0 1 2.25-5.75A3.25 3.25 0 0 1 12 4a3.25 3.25 0 0 1 5.75 2.25A3.25 3.25 0 0 1 20 12Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ozg5e6g1y"/><path class="kspm7p2vy"/></g>`,
		"fallback": "uix-sharp:organic-badge",
	});
}

export default Component;
