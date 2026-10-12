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
		"content": `<style>.g1rkz-enw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 21.25h5v-4.5h5v-4.5h5v-4.5h3.5M3 17L19 5M9.35 3.75h1.9v5h3v2h-5.5v-7z");
}
</style><path class="g1rkz-enw"/>`,
		"fallback": "iconoven:stair-lift-sharp",
	});
}

export default Component;
