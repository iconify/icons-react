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
		"content": `<style>.qpa-_bcia {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm-3 13c0-3.75 3.25-6 7-6c1.402 0 2.68.246 3.75.737M18 15v6m-3-3h6");
}
</style><path class="qpa-_bcia"/>`,
		"fallback": "uix-sharp:lead-source-referral",
	});
}

export default Component;
