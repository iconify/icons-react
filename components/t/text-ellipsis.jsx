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
		"content": `<style>.y7ufe4bpl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6.5h19M2.5 12h19m-19 5.5h7m3.25 0h.01m3.99 0h.01m3.99 0h.01");
}
</style><path class="y7ufe4bpl"/>`,
		"fallback": "uix:text-ellipsis",
	});
}

export default Component;
