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
		"content": `<style>.en8g9-zwv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 13.5h10a4 4 0 0 0 0-8a5.5 5.5 0 0 0-10 1a3.5 3.5 0 0 0 0 7Zm1 3L6.5 21m5.5-4.5L10.5 21m5.5-4.5L14.5 21m5.5-4.5L18.5 21");
}
</style><path class="en8g9-zwv"/>`,
		"fallback": "uix-sharp:rainfall-violent",
	});
}

export default Component;
