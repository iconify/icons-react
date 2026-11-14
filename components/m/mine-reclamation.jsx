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
		"content": `<style>.mh0e_kb7g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5C6 16 18 16 21.5 20.5ZM12 17V7m0 5c-3.5 0-5-2.5-5-5c2.5 0 5 1.5 5 5Zm0-2.5c0-3.5 2.5-6 5-6c0 2.5-1.5 6-5 6Zm-10 11h20");
}
</style><path class="mh0e_kb7g"/>`,
		"fallback": "uix-sharp:mine-reclamation",
	});
}

export default Component;
