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
		"content": `<style>.vp450hb6l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9v9.5a1.5 1.5 0 0 0 3 0V9M11 3.5v6l-2.5 9.75a1 1 0 0 0 1 1.25h5a1 1 0 0 0 1-1.25L13 9.5v-6M18.5 9v11.5h3V9");
}
</style><path class="vp450hb6l"/>`,
		"fallback": "uix-sharp:lab-glassware-icon",
	});
}

export default Component;
