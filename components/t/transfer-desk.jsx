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
		"content": `<style>.o_ui99xdr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 7.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0M3 20.5c0-3.75 2.75-6 6.5-6s6.5 2.25 6.5 6m-13.5 0h19M16.5 9h5m-2.75-2.75L21.5 9l-2.75 2.75");
}
</style><path class="o_ui99xdr"/>`,
		"fallback": "uix:transfer-desk",
	});
}

export default Component;
