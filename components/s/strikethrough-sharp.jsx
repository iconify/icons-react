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
		"content": `<style>.one4exxex {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.75 6.75c-.55-1.85-2.35-3-4.75-3c-2.7 0-4.75 1.4-4.75 3.6v1.622l1.4.778m7.95 4.65l.65.794V16.4c0 2.3-2.1 3.85-5.25 3.85c-2.5 0-4.3-1.1-4.9-3M3.75 12h16.5");
}
</style><path class="one4exxex"/>`,
		"fallback": "iconoven:strikethrough-sharp",
	});
}

export default Component;
