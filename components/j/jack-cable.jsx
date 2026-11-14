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
		"content": `<style>.krxfw1buy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 2.5h2.5v6h-2.5ZM9 8.5h6v8H9Zm3 8V18c0 2.25 1.5 3.5 4 3.5h5m-10.25-16h2.5");
}
</style><path class="krxfw1buy"/>`,
		"fallback": "uix-sharp:jack-cable",
	});
}

export default Component;
