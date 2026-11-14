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
		"content": `<style>.hge4t6z7c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 17.5h12V21h-12ZM5.5 3L15 17.5m-12.5 1a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><path class="hge4t6z7c"/>`,
		"fallback": "uix-sharp:polo-mallet",
	});
}

export default Component;
