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
		"content": `<style>.c2bag-blk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.25 20.25h-8.5V3.75h18.5v8m-18.5-3.5h18.5m-15 3.5h4.5m4.5 3.5l4.5 4.5m0-4.5l-4.5 4.5");
}
</style><path class="c2bag-blk"/>`,
		"fallback": "iconoven:software-uninstall-sharp",
	});
}

export default Component;
