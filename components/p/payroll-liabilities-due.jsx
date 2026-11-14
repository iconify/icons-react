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
		"content": `<style>.hkj8bhboh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.2 18.5H2.5v-13h19v13h-.7M6 9.5h5.5m-5.5 5h3.5m8.5.25v3.5M18 21h.01");
}
</style><path class="hkj8bhboh"/>`,
		"fallback": "uix-sharp:payroll-liabilities-due",
	});
}

export default Component;
