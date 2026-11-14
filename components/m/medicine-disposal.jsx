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
		"content": `<style>.hqxvnml4i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 12L7 21.5h10l1.5-9.5M4 12h16M7 2.5h4.5V10H7Zm0 3.75h4.5M17 3v6m-2.5-2.5L17 9l2.5-2.5");
}
</style><path class="hqxvnml4i"/>`,
		"fallback": "uix-sharp:medicine-disposal",
	});
}

export default Component;
