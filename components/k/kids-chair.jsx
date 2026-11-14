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
		"content": `<style>.c0ksb7_jx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 13.5V9a6 6 0 0 1 12 0v4.5m-14.5 0h17V17h-17Zm3 3.5v4m11-4v4");
}
</style><path class="c0ksb7_jx"/>`,
		"fallback": "uix-sharp:kids-chair",
	});
}

export default Component;
