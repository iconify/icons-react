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
		"content": `<style>.fz3b9rh6p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 9.25h9.5v12h-9.5zm2 0v-6.5h5.5v6.5M11 5.5v1m2-1v1m-2.25 10.75h2.5");
}
</style><path class="fz3b9rh6p"/>`,
		"fallback": "iconoven:usb-drive-sharp",
	});
}

export default Component;
