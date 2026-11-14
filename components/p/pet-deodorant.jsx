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
		"content": `<style>.j07052v3i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 21.5V10a2 2 0 0 1 2-2H10a2 2 0 0 1 2 2v11.5ZM6 4h4.5v4H6Zm8 2h6m-5.5-2.75L19 2m-4.5 6.75L19 10");
}
</style><path class="j07052v3i"/>`,
		"fallback": "uix-sharp:pet-deodorant",
	});
}

export default Component;
