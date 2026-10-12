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
		"content": `<style>.qj2hjpysp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 12.5a4.13 4.13 0 0 1 0-8.25a2.25 2.25 0 0 1 0 4.5m0 3.75a4.13 4.13 0 0 1 7.14 4.13a2.25 2.25 0 0 1-3.89-2.25M12 12.5a4.13 4.13 0 0 1-7.14 4.13a2.25 2.25 0 0 1 3.89-2.25");
}
</style><path class="qj2hjpysp"/>`,
		"fallback": "iconoven:triskelion-sharp",
	});
}

export default Component;
