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
		"content": `<style>.e1fekio3g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4h17v16.5h-17Zm0 4h17M7 12h10M7 14.5h10M7 17h10");
}
</style><path class="e1fekio3g"/>`,
		"fallback": "uix-sharp:self-storage-unit",
	});
}

export default Component;
