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
		"content": `<style>.e00t15byc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20h19M5 20l4-8h6l4 8ZM6.25 3.5c-.5 1-1.5 2-1.5 3.5a1.5 1.5 0 0 0 3 0c0-1.5-1-2.5-1.5-3.5Zm5.75 0c-.5 1-1.5 2-1.5 3.5a1.5 1.5 0 0 0 3 0c0-1.5-1-2.5-1.5-3.5Zm5.75 0c-.5 1-1.5 2-1.5 3.5a1.5 1.5 0 0 0 3 0c0-1.5-1-2.5-1.5-3.5Z");
}
</style><path class="e00t15byc"/>`,
		"fallback": "uix-sharp:leach-pad",
	});
}

export default Component;
