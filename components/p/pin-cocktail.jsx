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
		"content": `<style>.c-7ibil9c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5h16l-8 8Zm8 8V20m-3 0h5.9M11 7h.01M19 22l-2.25-2.75a2.75 2.75 0 1 1 4.5 0Z");
}
</style><path class="c-7ibil9c"/>`,
		"fallback": "uix-sharp:pin-cocktail",
	});
}

export default Component;
