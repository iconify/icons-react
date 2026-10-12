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
		"content": `<style>.lkzv4no-h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 21.25c1.25-3 4.75-4.5 8.75-4.5s7.5 1.5 8.75 4.5Zm8.75-4.5v-5.5m0 0C11.75 8.5 10 7 7 7c.25 2.75 2 4.25 5 4.25Zm0 0C12.25 8.5 14 7 17 7c-.25 2.75-2 4.25-5 4.25Z");
}
</style><path class="lkzv4no-h"/>`,
		"fallback": "iconoven:seedling-sharp",
	});
}

export default Component;
