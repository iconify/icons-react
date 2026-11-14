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
		"content": `<style>.hwp5e9j-h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6.5h13v11h-13Zm13 4l6-3.5v10l-6-3.5Z");
}
</style><path class="hwp5e9j-h"/>`,
		"fallback": "uix-sharp:meeting-camera",
	});
}

export default Component;
