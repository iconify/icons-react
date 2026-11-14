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
		"content": `<style>.lbkyklb7y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.5v-13m0 9L6 15m6 2.5l6-2.5m-7.5-6.5a2 2 0 0 1-1-3.5a2.5 2.5 0 0 1 5 0a2 2 0 0 1-1 3.5Zm-6 6.5a2 2 0 0 1-1-3.5a2.5 2.5 0 0 1 5 0a2 2 0 0 1-1 3.5Zm12 0a2 2 0 0 1-1-3.5a2.5 2.5 0 0 1 5 0a2 2 0 0 1-1 3.5Z");
}
</style><path class="lbkyklb7y"/>`,
		"fallback": "uix-sharp:parsley",
	});
}

export default Component;
