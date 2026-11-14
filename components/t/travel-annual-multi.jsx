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
		"content": `<style>.rpjsf0nnv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.4 21H3V4.5h17v7.2M3 9.5h17m-12-7v4m7-4v4m3 8v7M14.5 19l3.5-2l3.5 2m-5 2.5h3");
}
</style><path class="rpjsf0nnv"/>`,
		"fallback": "uix-sharp:travel-annual-multi",
	});
}

export default Component;
