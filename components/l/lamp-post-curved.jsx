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
		"content": `<style>.e08sp0b6y {
  d: path("M5 21.5h6m-3 0V8c0-3 2-4.5 5-4.5h3.5V5");
}

.mkp-21kph {
  d: path("M13 8.5Q13 5 16.5 5T20 8.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e08sp0b6y"/><path class="mkp-21kph"/></g>`,
		"fallback": "uix-sharp:lamp-post-curved",
	});
}

export default Component;
