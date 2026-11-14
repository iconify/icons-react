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
		"content": `<style>.bc546fw3v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5h19M3 12.5h18m-14.5 0v8m5.5-8v8m5.5-8v8M7 12.5a5 5 0 0 1 10 0m-5-5V3");
}
</style><path class="bc546fw3v"/>`,
		"fallback": "uix-sharp:national-government",
	});
}

export default Component;
