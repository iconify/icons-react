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
		"content": `<style>.kx248g-_c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 8.5h12m-2.5 0V21M3 14.5h8m-7.5 0v-7m6 7V21m0-3.5h9");
}
</style><path class="kx248g-_c"/>`,
		"fallback": "uix-sharp:school-desk",
	});
}

export default Component;
