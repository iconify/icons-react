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
		"content": `<style>.fp9a08bgs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h19M3 3.5h7.5Q6 9 6 12t1.5 5.5H3Zm18 0h-7.5Q18 9 18 12t-1.5 5.5H21Zm-18.5 17h19");
}
</style><path class="fp9a08bgs"/>`,
		"fallback": "uix-sharp:opening-weekend",
	});
}

export default Component;
