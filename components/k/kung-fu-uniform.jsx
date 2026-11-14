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
		"content": `<style>.a0ov50a-l {
  d: path("m9.5 5l5 5.5V21");
}

.uh1n66bko {
  d: path("M8 5V2.5h8V5l4 1.5l1.5 7.5l-3 .5l-1-4V21h-11V10.5l-1 4l-3-.5L4 6.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="uh1n66bko"/><path class="a0ov50a-l"/></g>`,
		"fallback": "uix-sharp:kung-fu-uniform",
	});
}

export default Component;
