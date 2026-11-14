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
		"content": `<style>.artaj4b4n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.25 6.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0ZM3 20.5c10 0 2-14 8.5-14");
}
</style><path class="artaj4b4n"/>`,
		"fallback": "uix-sharp:pool-trick-shot",
	});
}

export default Component;
