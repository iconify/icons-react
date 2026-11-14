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
		"content": `<style>.f_p2yegdv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v19M2.5 12h19M9.25 5.25L12 2.5l2.75 2.75m-5.5 13.5L12 21.5l2.75-2.75m-9.5-9.5L2.5 12l2.75 2.75m13.5-5.5L21.5 12l-2.75 2.75");
}
</style><path class="f_p2yegdv"/>`,
		"fallback": "uix:move",
	});
}

export default Component;
