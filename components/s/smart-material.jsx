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
		"content": `<style>.bmlun5btl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h8v8h-8Zm9 14a5 5 0 1 0 10 0a5 5 0 1 0-10 0Zm2-11.5c3 0 5 1.5 5 4m-2-2l2 2l2-2M8.75 19C7.5 19 5.5 17.5 5.5 15m-2 2l2-2l2 2");
}
</style><path class="bmlun5btl"/>`,
		"fallback": "uix-sharp:smart-material",
	});
}

export default Component;
