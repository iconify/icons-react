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
		"content": `<style>.b_w-m80ov {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15.5h19v5h-19Zm1 0l2-4l2 4l2-4l2 4l2-4l2 4l2-4l2 4l1-2");
}
</style><path class="b_w-m80ov"/>`,
		"fallback": "uix-sharp:lawn-length-short",
	});
}

export default Component;
