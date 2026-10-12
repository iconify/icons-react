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
		"content": `<style>.w04nb5q3o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 9.75h12.5C16.75 13.5 14 16 10.5 16s-6.25-2.5-6.25-6.25Zm.25 8.75h12v2.75h-12zm12.25-8.75l4.5 4M6.07 7.22l.362-2.069L8.25 4.1M3.61 6.78a7 7 0 0 1 1.94-3.73");
}
</style><path class="w04nb5q3o"/>`,
		"fallback": "iconoven:meditation-bell-sharp",
	});
}

export default Component;
