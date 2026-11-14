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
		"content": `<style>.fd-rjozmo {
  d: path("M11.5 9.75a3.5 3.5 0 1 1 5.75 3.5M15 4.5V2.75m4.5 3.5L20.75 5M10.5 6.25L9.25 5");
}

.llc-byvop {
  d: path("M6 20.75h10.5a3.75 3.75 0 0 0 0-7.5a5.5 5.5 0 0 0-10.5 1a3.25 3.25 0 0 0 0 6.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="llc-byvop"/><path class="fd-rjozmo"/></g>`,
		"fallback": "uix-sharp:sunlight-shade",
	});
}

export default Component;
