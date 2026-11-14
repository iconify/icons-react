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
		"content": `<style>.acea_dbyh {
  d: path("M3 18c.5-4 4-6.5 8.5-6.5H21V18Zm7.5-6.5l1.5-5h7.5v5");
}

.p130bubnq {
  fill: currentColor;
  d: path("M11.75 15a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Zm4 0a.75.75 0 1 0 1.5 0a.75.75 0 1 0-1.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="acea_dbyh"/><path class="p130bubnq"/></g>`,
		"fallback": "uix-sharp:iron-medium",
	});
}

export default Component;
