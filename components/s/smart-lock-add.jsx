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
		"content": `<style>.hnur4kzhg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.5 20.8v.2h-10V10h10v5.2M4.75 10V6.75a2.75 2.75 0 0 1 5.5 0V10M7.5 13.5v4M18 15v6m-3-3h6");
}
</style><path class="hnur4kzhg"/>`,
		"fallback": "uix-sharp:smart-lock-add",
	});
}

export default Component;
