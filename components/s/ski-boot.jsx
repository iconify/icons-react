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
		"content": `<style>.gkyt4lbti {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 3h6l.75 6.5L19.5 13c1.1.75 1.5 1.75 1.5 3v3.5H3.5v-3l3-7Zm-4 13.5H21M8.25 7h5m-5.5 5.5H16");
}
</style><path class="gkyt4lbti"/>`,
		"fallback": "uix-sharp:ski-boot",
	});
}

export default Component;
