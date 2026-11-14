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
		"content": `<style>.e931oub2s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h4v16h-4Zm15 0h4v16h-4Zm-11 2.5h11m-11 11h11m-8-5.5h5");
}
</style><path class="e931oub2s"/>`,
		"fallback": "uix-sharp:myth-legend",
	});
}

export default Component;
