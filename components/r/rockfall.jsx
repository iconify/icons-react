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
		"content": `<style>.kt5ihqseo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 5.5l16.5 15h2.5m-9-13l.5-3l4-1L18.5 7L15 8.5ZM18 11l3-.5l.5 3.5l-3 1Z");
}
</style><path class="kt5ihqseo"/>`,
		"fallback": "uix-sharp:rockfall",
	});
}

export default Component;
