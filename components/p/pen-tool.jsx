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
		"content": `<style>.r_5ku5vgz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 17c1.5-6.5 12.5-6.5 14 0M3 17h4v4H3Zm14 0h4v4h-4ZM4 6h5.5m5 0H20M9.5 4h5v4h-5Z");
}
</style><path class="r_5ku5vgz"/>`,
		"fallback": "uix-sharp:pen-tool",
	});
}

export default Component;
