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
		"content": `<style>.cqgdkf6gu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 20V4m0 0h5.5a4.25 4.25 0 0 1 0 8.5H7m4.5 0L17 20");
}
</style><path class="cqgdkf6gu"/>`,
		"fallback": "uix-sharp:rand-sign",
	});
}

export default Component;
