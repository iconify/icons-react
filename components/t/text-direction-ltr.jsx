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
		"content": `<style>.fft-7nb2b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.5 3.5v7H10a3.5 3.5 0 0 1 0-7Zm0 0h4m-4 0V14M16 3.5V14M4 19h16m-2.5-2.5L20 19l-2.5 2.5");
}
</style><path class="fft-7nb2b"/>`,
		"fallback": "uix-sharp:text-direction-ltr",
	});
}

export default Component;
