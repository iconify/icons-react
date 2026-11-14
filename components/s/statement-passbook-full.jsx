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
		"content": `<style>.ybpu7gb_c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 4h7.25A2.625 2.625 0 0 1 15 6.625v12.25a2.625 2.625 0 0 1-2.625 2.625h-7.25A2.625 2.625 0 0 1 2.5 18.875V6.625A2.625 2.625 0 0 1 5.125 4M15 5.5h2.25V20H15m2.25-13h2.25v11.5h-2.25m2.25-10h2.25V17H19.5M6 4v17.5m3-13h3.5");
}
</style><path class="ybpu7gb_c"/>`,
		"fallback": "uix:statement-passbook-full",
	});
}

export default Component;
