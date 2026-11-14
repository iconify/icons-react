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
		"content": `<style>.x1-spst7q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 9h10v12.5H7Zm1.5-6.5h7V9h-7Zm2.25 3.25h2.5M12 13v5m-2.5-2.5h5");
}
</style><path class="x1-spst7q"/>`,
		"fallback": "uix-sharp:usb-stick-plus",
	});
}

export default Component;
