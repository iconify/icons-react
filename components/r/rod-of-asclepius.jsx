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
		"content": `<style>.kpvu39b1r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v19m0-16c5 1 5 4 0 5s-5 4 0 5s5 3.5 0 4.5");
}
</style><path class="kpvu39b1r"/>`,
		"fallback": "uix-sharp:rod-of-asclepius",
	});
}

export default Component;
