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
		"content": `<style>.l2i5plbfl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.5 6.5C16 5 14.6 4 12.75 4C10.5 4 9 5.6 9 7.75v6.75q0 3.375-3 5.25h12M6 12h8");
}
</style><path class="l2i5plbfl"/>`,
		"fallback": "uix-sharp:pound-sign",
	});
}

export default Component;
