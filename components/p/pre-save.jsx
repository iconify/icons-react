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
		"content": `<style>.tyi6mpm0k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 16.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm6 0V3L17 5v3.5l-6.5-2m5.5 8h5V21l-2.5-2l-2.5 2Z");
}
</style><path class="tyi6mpm0k"/>`,
		"fallback": "uix-sharp:pre-save",
	});
}

export default Component;
