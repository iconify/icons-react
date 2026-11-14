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
		"content": `<style>.m61xltbpw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5C7 20.5 9 18 11 13c2-5.5 4-7.5 6-7.5s3 8.5 4.5 15");
}
</style><path class="m61xltbpw"/>`,
		"fallback": "uix-sharp:skew-left",
	});
}

export default Component;
