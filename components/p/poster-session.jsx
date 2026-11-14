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
		"content": `<style>.j5vn_ub1b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 2.5H21.5v12H10.75Zm5.25 12v7M13.5 6.25h5.25m-5.25 4h3M3 12.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-.5 9c0-2.5 1.25-3.75 3-3.75s3 1.25 3 3.75");
}
</style><path class="j5vn_ub1b"/>`,
		"fallback": "uix-sharp:poster-session",
	});
}

export default Component;
