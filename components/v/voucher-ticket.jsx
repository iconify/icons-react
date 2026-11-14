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
		"content": `<style>.ve8hqmbin {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 5.5H15v13H4.5a2 2 0 0 1-2-2V14a2 2 0 0 0 0-4V7.5a2 2 0 0 1 2-2Zm13.25 0h1.75a2 2 0 0 1 2 2V10a2 2 0 0 0 0 4v2.5a2 2 0 0 1-2 2h-1.75Zm-6.25 3l-4 7m0-6.5h.01m3.99 6h.01");
}
</style><path class="ve8hqmbin"/>`,
		"fallback": "uix-sharp:voucher-ticket",
	});
}

export default Component;
