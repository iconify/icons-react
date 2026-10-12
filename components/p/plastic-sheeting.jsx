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
		"content": `<style>.y1wsvnatc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3h12.5a2.5 3 0 0 1 0 6H6m0-6a2.25 3 0 1 0 0 6a2.25 3 0 1 0 0-6m1.5 6h12v11.25h-12Zm3 4h6m-6 3.75h6");
}
</style><path class="y1wsvnatc"/>`,
		"fallback": "iconoven:plastic-sheeting",
	});
}

export default Component;
