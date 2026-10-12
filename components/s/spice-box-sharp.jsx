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
		"content": `<style>.dkd2p1b_z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3.5h15.75l-.17.73l-.91 3.79l-.17.73H5l-.17-.73l-.91-3.79l-.17-.73zm-1.75 8.25h18.5v9.5H2.75zm6 0v9.5m6.5-9.5v9.5");
}
</style><path class="dkd2p1b_z"/>`,
		"fallback": "iconoven:spice-box-sharp",
	});
}

export default Component;
