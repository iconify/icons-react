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
		"content": `<style>.w2gk60bvn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3h14v18H6ZM4 7.5h4M4 12h4m-4 4.5h4M11 8h5.5");
}
</style><path class="w2gk60bvn"/>`,
		"fallback": "uix-sharp:notebook",
	});
}

export default Component;
