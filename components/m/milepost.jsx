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
		"content": `<style>.qk0d_y_6o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 5h15v7h-15Zm5 0V2.5h5V5m-5 7v9.5m5-9.5v9.5M8 8.5h8");
}
</style><path class="qk0d_y_6o"/>`,
		"fallback": "uix-sharp:milepost",
	});
}

export default Component;
