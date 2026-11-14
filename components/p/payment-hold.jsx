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
		"content": `<style>.smbbl_-uv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.7 19H2.5V5h19v7.7m-19-3.2h19m-19 0h19M6 15h2.5m8 .5v5m3-5v5");
}
</style><path class="smbbl_-uv"/>`,
		"fallback": "uix-sharp:payment-hold",
	});
}

export default Component;
