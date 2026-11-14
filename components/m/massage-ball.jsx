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
		"content": `<style>.xfgaj4ywf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 12a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0Zm9.5-4.5a7 7 0 0 1 0 9m3.25-9.25a9.75 9.75 0 0 1 0 9.5M6.75 7.5a7 7 0 0 0 0 9M3.5 7.25a9.75 9.75 0 0 0 0 9.5");
}
</style><path class="xfgaj4ywf"/>`,
		"fallback": "uix-sharp:massage-ball",
	});
}

export default Component;
