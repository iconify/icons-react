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
		"content": `<style>.niu_3j0ol {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm8 0h9m-3 0v3m3-3v2.5");
}
</style><path class="niu_3j0ol"/>`,
		"fallback": "uix-sharp:safe-deposit-key",
	});
}

export default Component;
