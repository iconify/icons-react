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
		"content": `<style>.g0o6g5mwt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4H8v16.5H3.5ZM8 6.5h4.5v14H8Zm4.485-.183l4.402-.936l3.015 14.183l-4.402.936ZM3.5 8H8m0 2.5h4.5");
}
</style><path class="g0o6g5mwt"/>`,
		"fallback": "uix-sharp:pin-library",
	});
}

export default Component;
