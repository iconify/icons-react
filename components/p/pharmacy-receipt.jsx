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
		"content": `<style>.cmtqa2bdd {
  d: path("M12.878 20.027L12 19.5L9.5 21l-2.25-1.5L5 21V2.5h14v11.3M8.5 7h7m-7 4H13");
}

.e9fltbcec {
  d: path("m14.75 18l2 2L21 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cmtqa2bdd"/><path class="e9fltbcec"/></g>`,
		"fallback": "uix-sharp:pharmacy-receipt",
	});
}

export default Component;
