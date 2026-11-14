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
		"content": `<style>.pqvb0nboy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.5 6c4.25 0 7 2.5 7 6s-2.75 6-7 6Zm-10 1.5l6 2m-6 2.5l6 2m-6 2.5l6 2");
}
</style><path class="pqvb0nboy"/>`,
		"fallback": "uix-sharp:low-beam",
	});
}

export default Component;
