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
		"content": `<style>.uxughvbxl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 2.75h4c1.75 3 5.5 6.75 5.5 9.5v2.25H10v1.75l1.25 1.25L10 18.75v2.5H3.75Zm4.75 9.5H10m5.75 1.5c.95 1.3 1.75 2.25 1.75 3.1a1.75 1.75 0 0 1-3.5 0c0-.85.8-1.8 1.75-3.1Z");
}
</style><path class="uxughvbxl"/>`,
		"fallback": "iconoven:runny-nose-sharp",
	});
}

export default Component;
