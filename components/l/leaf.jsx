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
		"content": `<style>.tm8jzenpg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 19c0-9 5-14 14-14c0 9-5 14-14 14Zm-1.5 1.5l10-10");
}
</style><path class="tm8jzenpg"/>`,
		"fallback": "uix-sharp:leaf",
	});
}

export default Component;
