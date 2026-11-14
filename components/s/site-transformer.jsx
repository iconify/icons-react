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
		"content": `<style>.aui3_6b0x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14 21H2.5V8.5h16V11M7 8.5V4M5 4h4m5 4.5V4m-2 0h4m4 9.5L16 18h4l-3.25 4");
}
</style><path class="aui3_6b0x"/>`,
		"fallback": "uix-sharp:site-transformer",
	});
}

export default Component;
