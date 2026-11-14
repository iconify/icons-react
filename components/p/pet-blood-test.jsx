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
		"content": `<style>.m9m9ap2jj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 10.75v7.75a3 3 0 0 0 6 0v-7.75m-7.5 0h9M9 15.5h6m-3-13S10 5 10 6a2 2 0 0 0 4 0c0-1-2-3.5-2-3.5Z");
}
</style><path class="m9m9ap2jj"/>`,
		"fallback": "uix-sharp:pet-blood-test",
	});
}

export default Component;
