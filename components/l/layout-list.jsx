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
		"content": `<style>.csixk8xaw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4h6v6h-6Zm0 10h6v6h-6Zm9-8.5h8m-8 3h5m-5 7h8m-8 3h5");
}
</style><path class="csixk8xaw"/>`,
		"fallback": "uix-sharp:layout-list",
	});
}

export default Component;
