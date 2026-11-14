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
		"content": `<style>.fe4nfpbjs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 17h6v1a3 3 0 0 1-6 0Zm0 0L4.5 3.5h15L15 17Zm3 0V3.5m-5.5 6h11");
}
</style><path class="fe4nfpbjs"/>`,
		"fallback": "uix-sharp:shuttlecock",
	});
}

export default Component;
