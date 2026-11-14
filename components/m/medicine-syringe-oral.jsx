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
		"content": `<style>.abawrpbpm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m17.303 3.868l2.829 2.829m-1.414-1.415l-1.415 1.415m-1.767-1.768l3.535 3.535L12 15.536L8.464 12Zm-5.304 8.839l-1.414 1.414M6.25 16S4.5 18 4.5 19.25a1.75 1.75 0 0 0 3.5 0C8 18 6.25 16 6.25 16Z");
}
</style><path class="abawrpbpm"/>`,
		"fallback": "uix-sharp:medicine-syringe-oral",
	});
}

export default Component;
