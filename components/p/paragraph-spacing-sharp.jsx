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
		"content": `<style>.ahbp3ib1s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 3.75h10.25M11 7.75h6.5m-6.5 8.5h10.25m-10.25 4h6.5m-12-12.5v8.5m-2-6.5l2-2l2 2m-4 4.5l2 2l2-2");
}
</style><path class="ahbp3ib1s"/>`,
		"fallback": "iconoven:paragraph-spacing-sharp",
	});
}

export default Component;
