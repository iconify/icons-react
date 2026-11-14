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
		"content": `<style>.e9fltbcec {
  d: path("m14.75 18l2 2L21 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w67_2nizy {
  d: path("M13.831 21H3V10.5L12 3l9 7.5v1.269m0 7.9V21h-1.269");
}
</style><g class="ulnmmdpxh"><path class="w67_2nizy"/><path class="e9fltbcec"/></g>`,
		"fallback": "uix-sharp:lab-safety",
	});
}

export default Component;
