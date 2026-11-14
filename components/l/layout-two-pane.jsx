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
		"content": `<style>.q0xvmbbrx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19v18h-19ZM11 3v18M5.25 7.5h3m-3 4.5h3m-3 4.5h3m5.5-9h5");
}
</style><path class="q0xvmbbrx"/>`,
		"fallback": "uix-sharp:layout-two-pane",
	});
}

export default Component;
