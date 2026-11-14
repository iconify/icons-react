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
		"content": `<style>.ia0udun6t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.75 5.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm-11 6.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM9 10.5L15 7m-6 6.5l4.5 2.75m2.75-1a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM14.75 21c.25-1.75 1.5-2.75 3.25-2.75s3 1 3.25 2.75");
}
</style><path class="ia0udun6t"/>`,
		"fallback": "uix-sharp:share-user",
	});
}

export default Component;
