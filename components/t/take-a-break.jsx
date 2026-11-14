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
		"content": `<style>.khyksbxjw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8h11v7a4 4 0 0 1-4 4h-3a4 4 0 0 1-4-4Zm11 1.5H15a2.5 2.5 0 0 1 0 5h-1.5M6 2.5V5m4-2.5V5m7.5 11.5v5m3-5v5");
}
</style><path class="khyksbxjw"/>`,
		"fallback": "uix-sharp:take-a-break",
	});
}

export default Component;
