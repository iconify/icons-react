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
		"content": `<style>.qp43iccdc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13.5c0-2.5 4-3 9.5-3s9.5 1 9.5 3s-4 3-9.5 3s-9.5-.5-9.5-3ZM8 18l6-10.5m1.201-5.165l2.598 1.5l-2.5 4.33l-2.598-1.5ZM11.5 20.5q3-1.875 6 0c2 1.25 3 1 4 .5");
}
</style><path class="qp43iccdc"/>`,
		"fallback": "uix-sharp:paddleboard",
	});
}

export default Component;
