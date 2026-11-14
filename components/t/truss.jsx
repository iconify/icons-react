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
		"content": `<style>.mx2ax2baj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 5.5h9.5M2.5 18.5h19m-19 0l4.75-13l4.75 13l4.75-13l4.75 13");
}
</style><path class="mx2ax2baj"/>`,
		"fallback": "uix-sharp:truss",
	});
}

export default Component;
