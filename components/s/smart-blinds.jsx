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
		"content": `<style>.yp88y9bke {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5h18v3H3Zm1.5 3h15v16h-15Zm0 3h15m-15 3h15m-3 0v4");
}
</style><path class="yp88y9bke"/>`,
		"fallback": "uix-sharp:smart-blinds",
	});
}

export default Component;
