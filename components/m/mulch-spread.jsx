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
		"content": `<style>.zo1ybkl-c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5c2.5-4 16.5-4 19 0Zm8-15.25l4.25 4.25L12 13.25L8 13l-.25-4Zm2.25 2L17.5 3.5m-1-1l2 2M4.75 14h.01m2.99 1.75h.01");
}
</style><path class="zo1ybkl-c"/>`,
		"fallback": "uix-sharp:mulch-spread",
	});
}

export default Component;
