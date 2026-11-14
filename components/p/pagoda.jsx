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
		"content": `<style>.ogoexacax {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21V6M5 9h14l-2 2.5H7Zm1 5h12l-1.5 2.5h-9Zm1 5h10l-1 2H8Zm5-13V3");
}
</style><path class="ogoexacax"/>`,
		"fallback": "uix-sharp:pagoda",
	});
}

export default Component;
