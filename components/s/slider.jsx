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
		"content": `<style>.zmtgtbbhv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12h8.5m7 0H21m-9 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}
</style><path class="zmtgtbbhv"/>`,
		"fallback": "uix-sharp:slider",
	});
}

export default Component;
