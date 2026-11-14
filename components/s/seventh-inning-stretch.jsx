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
		"content": `<style>.fy6o9pesj {
  d: path("m4.5 3l4 7.5h7l4-7.5M12 10.5V15m-3.5 6.5L12 15l3.5 6.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y670kbcpu {
  d: path("M9.25 5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="y670kbcpu"/><path class="fy6o9pesj"/></g>`,
		"fallback": "uix-sharp:seventh-inning-stretch",
	});
}

export default Component;
