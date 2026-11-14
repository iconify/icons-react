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
		"content": `<style>.a18d6cc4h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.395 15.603L2.5 11L8 4.5h9.585M21.5 8.485V17.5h-9.085M7.75 11h.01M12 8.5h.01m5.99 5h.01m-11.51 6l14-14");
}
</style><path class="a18d6cc4h"/>`,
		"fallback": "uix-sharp:sales-tax-exempt",
	});
}

export default Component;
