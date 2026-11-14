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
		"content": `<style>.p6z5e0vbe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5h15v5.75h-15ZM13.8 15H4.25V9.25h15v4.3M17.8 15h-2.1m-2.15 5.75H3.5V15h10.3m1.9 0h2.1M7 5.5v1.75m4-1.75v1.75m4-1.75v1.75m-7.25 4V13m4-1.75V13m4-1.75V13M7 17v1.75M11 17v.8m0 .4v.55m3.75-.75l2 2L21 15.75");
}
</style><path class="p6z5e0vbe"/>`,
		"fallback": "uix-sharp:payroll-approval",
	});
}

export default Component;
