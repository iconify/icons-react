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
		"content": `<style>.pnzk1xb4g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3v8.5m0 7V21m-3-6a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}
</style><path class="pnzk1xb4g"/>`,
		"fallback": "uix-sharp:slider-vertical",
	});
}

export default Component;
