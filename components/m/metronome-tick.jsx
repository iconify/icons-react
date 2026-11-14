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

.vkpcntgkk {
  d: path("M13.354 20.5H4.5L9 2.5h4l3.274 13.097M10.5 17l6-12.5");
}
</style><g class="ulnmmdpxh"><path class="vkpcntgkk"/><path class="e9fltbcec"/></g>`,
		"fallback": "uix-sharp:metronome-tick",
	});
}

export default Component;
