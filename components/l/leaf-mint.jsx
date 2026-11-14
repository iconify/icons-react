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
		"content": `<style>.ggo1z9bvj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5L15.75 5l-.25 1.5L18.25 9l-.75 1.5l1.25 2.75l-1.5 1L16 17l-4 1.75L8 17l-1.25-2.75l-1.5-1L6.5 10.5L5.75 9L8.5 6.5L8.25 5Zm0 16.25v2.75m0-2.75V6.5");
}
</style><path class="ggo1z9bvj"/>`,
		"fallback": "uix-sharp:leaf-mint",
	});
}

export default Component;
