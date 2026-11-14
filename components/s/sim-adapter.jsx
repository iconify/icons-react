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
		"content": `<style>.shdwwuy4t {
  d: path("M7.5 11h5l3 3v4.5h-8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wsr5fgb5v {
  d: path("M4.5 2.5h10l5 5v14h-15Z");
}
</style><g class="ulnmmdpxh"><path class="wsr5fgb5v"/><path class="shdwwuy4t"/></g>`,
		"fallback": "uix-sharp:sim-adapter",
	});
}

export default Component;
