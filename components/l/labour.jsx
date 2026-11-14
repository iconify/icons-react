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
		"content": `<style>.pc03s_bja {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 8.5h3c1 0 1.5.5 1.75 1.5l.25 1c2.5.75 4 2.5 3.75 4.5c-.25 1.75-1.75 2.75-3.75 2.5l-.25 3.5H5V17c-.75-1.5-1.25-4-1-6c.25-1.5.75-2.5 1.5-2.5Zm-.25-3.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm10.421 6.161a6.75 6.75 0 0 1 0 8.678m2.816-9.931a9.75 9.75 0 0 1 0 11.184");
}
</style><path class="pc03s_bja"/>`,
		"fallback": "uix-sharp:labour",
	});
}

export default Component;
