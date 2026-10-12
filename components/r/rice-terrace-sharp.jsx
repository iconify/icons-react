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
		"content": `<style>.ykyp1lb0s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 5.5H9L10.5 8m-7.75 3H14l1.5 2.5m-12.75 3H19l1.5 2.5");
}
</style><path class="ykyp1lb0s"/>`,
		"fallback": "iconoven:rice-terrace-sharp",
	});
}

export default Component;
