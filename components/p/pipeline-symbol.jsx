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
		"content": `<style>.x1yiv9b9a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 9H2.5v6H7m3-6h4m-4 6h4m3-6h4.5v6H17M7 6.5h3v11H7Zm7 0h3v11h-3Z");
}
</style><path class="x1yiv9b9a"/>`,
		"fallback": "uix-sharp:pipeline-symbol",
	});
}

export default Component;
