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
		"content": `<style>.y4_qrwywp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 18V4.75a1.75 1.75 0 0 0-3.5 0v5.5c-1.5 1-2.25 2.5-2.25 4.25c0 1.5.5 2.75 1.5 3.5Zm3 0V4.75a1.75 1.75 0 0 1 3.5 0v5.5c1.5 1 2.25 2.5 2.25 4.25c0 1.5-.5 2.75-1.5 3.5Zm-7.25 3h11.5");
}
</style><path class="y4_qrwywp"/>`,
		"fallback": "iconoven:prayer-hands",
	});
}

export default Component;
