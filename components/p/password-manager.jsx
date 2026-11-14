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
		"content": `<style>.h5_wq3bas {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 15.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Zm7.75-3.25L19.5 2.5M18 4l1.75 1.75m-4.25.75l1.75 1.75M15 17.5h6v4h-6Zm1.5 0v-1a1.5 1.5 0 0 1 3 0v1");
}
</style><path class="h5_wq3bas"/>`,
		"fallback": "uix-sharp:password-manager",
	});
}

export default Component;
