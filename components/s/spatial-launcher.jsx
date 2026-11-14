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
		"content": `<style>.tlp69zb8j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 6.5h4l-.75 4h-4Zm6.75 0h4l-.75 4h-4Zm6.75 0h4l-.75 4h-4ZM3 13.5h4l-.75 4h-4Zm6.75 0h4l-.75 4H9Zm6.75 0h4l-.75 4h-4Z");
}
</style><path class="tlp69zb8j"/>`,
		"fallback": "uix-sharp:spatial-launcher",
	});
}

export default Component;
