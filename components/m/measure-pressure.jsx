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
		"content": `<style>.j72cxfdut {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 10.5a8 8 0 1 0 16 0a8 8 0 1 0-16 0Zm8 8v3m-3 0h6m-3-11l2.75-4m-2.75 4h.01");
}
</style><path class="j72cxfdut"/>`,
		"fallback": "uix-sharp:measure-pressure",
	});
}

export default Component;
