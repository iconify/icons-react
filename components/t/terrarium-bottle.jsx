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
		"content": `<style>.h60f0sbox {
  d: path("M10.25 2.5h3.5v5c3.75 1.25 5.75 4.25 5.75 7.5c0 4-3 6.5-7.5 6.5S4.5 19 4.5 15c0-3.25 2-6.25 5.75-7.5ZM12 18.75V13");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s3my2q0xf {
  d: path("M12 14c0-1.75 1.25-2.75 3-2.75C15 13 13.75 14 12 14m0 1.5c0-1.75-1.25-2.75-3-2.75c0 1.75 1.25 2.75 3 2.75");
}
</style><g class="hntgybcog"><path class="h60f0sbox"/><path class="s3my2q0xf"/></g>`,
		"fallback": "uix:terrarium-bottle",
	});
}

export default Component;
