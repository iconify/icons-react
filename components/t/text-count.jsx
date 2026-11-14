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
		"content": `<style>.dxr76qblj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5h18M3 8h18M3 12.5h8m5.5 2l-1 7m4.5-7l-1 7m-5-5h7.5m-8 3H21");
}
</style><path class="dxr76qblj"/>`,
		"fallback": "uix-sharp:text-count",
	});
}

export default Component;
