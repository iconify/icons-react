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
		"content": `<style>.zalm3ub0t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3.5h12m-9 3a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm3 3v7m-9 4l1.5-4h15l1.5 4");
}
</style><path class="zalm3ub0t"/>`,
		"fallback": "uix-sharp:lat-pulldown",
	});
}

export default Component;
