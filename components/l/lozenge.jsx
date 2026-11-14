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
		"content": `<style>.umc3qjbzk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 12a5.5 4 0 1 0 11 0a5.5 4 0 1 0-11 0Zm0 0L2.75 8.5v7Zm11 0l3.75-3.5v7Z");
}
</style><path class="umc3qjbzk"/>`,
		"fallback": "uix-sharp:lozenge",
	});
}

export default Component;
