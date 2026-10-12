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
		"content": `<style>.ugebc2brg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 5.25h4.5m-2.25 0v5M5.75 16.5a6.25 6.25 0 0 1 12.5 0Zm-2.5 0h17.5V21H3.25zM5 5.75l1.5 1.5M19 5.75l-1.5 1.5");
}
</style><path class="ugebc2brg"/>`,
		"fallback": "iconoven:service-bell-sharp",
	});
}

export default Component;
