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
		"content": `<style>.n84gz0bqx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 2.5h17V9h-17ZM12 9v4m-1.5 0h3v8.5h-3Zm4-4l2 6.5h5V9m-2.75 3.25h.01");
}
</style><path class="n84gz0bqx"/>`,
		"fallback": "uix-sharp:lint-roller",
	});
}

export default Component;
