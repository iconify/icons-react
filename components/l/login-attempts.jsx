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
		"content": `<style>.c_oig9bkm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 6v7M9 6v7m3.5-7v7M16 6v7M3.5 11L18 8m0 6.75v3.5M18 21h.01");
}
</style><path class="c_oig9bkm"/>`,
		"fallback": "uix-sharp:login-attempts",
	});
}

export default Component;
