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
		"content": `<style>.ajjbjl72e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19L7 5l4.5 14m-7.25-5h5.5M14 19l3.5-8l3.5 8m-5.75-2.75h4.5");
}
</style><path class="ajjbjl72e"/>`,
		"fallback": "uix-sharp:small-caps",
	});
}

export default Component;
