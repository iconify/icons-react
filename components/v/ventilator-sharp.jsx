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
		"content": `<style>.xnnxi_nai {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 5.75h10.5v15.5H2.75zm3 3.25h4.5m-4.5 3h4.5M8 17.25h.01m5.24-.25c3 0 5.25-1.75 5.25-4.75V8.5M16 2.75h5.25l-.17.73l-.91 4.04l-.17.73h-3.5l-.17-.73l-.91-4.04l-.17-.73z");
}
</style><path class="xnnxi_nai"/>`,
		"fallback": "iconoven:ventilator-sharp",
	});
}

export default Component;
