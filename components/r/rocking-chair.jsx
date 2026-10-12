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
		"content": `<style>.v4blbes0k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 3.25L7.5 13.5h9M6.95 8.75h6.55v4.75m-5.25 0l-1 6m8.5-6l1 6m-13-1.5c3 2.75 13.5 2.75 16.5 0");
}
</style><path class="v4blbes0k"/>`,
		"fallback": "iconoven:rocking-chair",
	});
}

export default Component;
