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
		"content": `<style>.vmx0npiov {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 15.5h8l-1 6H4Zm11 6v-19m6 0v19M14 7h6m-6 5h6m-6 5h6M7 15.5V12c-.25-2.5-1.75-4-4-4c0 2.25 1.5 4 4 4c.25-2.75 1.75-4.5 4-4.5C11 10 9.5 12 7 12");
}
</style><path class="vmx0npiov"/>`,
		"fallback": "uix-sharp:plant-ladder",
	});
}

export default Component;
