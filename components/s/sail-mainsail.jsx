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
		"content": `<style>.tgp3p1bna {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 2.5c5 4 9 9 11.5 14.5M6 2.5v19M6 17h12.5");
}
</style><path class="tgp3p1bna"/>`,
		"fallback": "uix-sharp:sail-mainsail",
	});
}

export default Component;
