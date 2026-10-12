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
		"content": `<style>.vjgsgebma {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 5.25h16.5m-11.5 0C8.75 11 7.75 15.5 5.5 19m9.75-13.75V16c0 2 .75 3 2.5 3h2.5v-2.5");
}
</style><path class="vjgsgebma"/>`,
		"fallback": "iconoven:pi-sharp",
	});
}

export default Component;
