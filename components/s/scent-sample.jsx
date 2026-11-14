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
		"content": `<style>.h7nbrs06j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.1 20.5H3.5V8H17v4M7.5 3.5h5V8h-5Zm5 1.75h2.75m3.701 8.969l2.598 1.5l-3.5 6.062l-2.598-1.5Z");
}
</style><path class="h7nbrs06j"/>`,
		"fallback": "uix-sharp:scent-sample",
	});
}

export default Component;
