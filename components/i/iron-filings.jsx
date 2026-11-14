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
		"content": `<style>.qi2kegbjk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8.5V13a7.5 7.5 0 0 0 15 0V8.5h-4V13a3.5 3.5 0 0 1-7 0V8.5Zm0 3h4m7 0h4m-7.5-9v3M7.5 3l1 2.5m8-2.5l-1 2.5");
}
</style><path class="qi2kegbjk"/>`,
		"fallback": "uix-sharp:iron-filings",
	});
}

export default Component;
