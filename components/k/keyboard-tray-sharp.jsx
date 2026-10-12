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
		"content": `<style>.rc7vedbkm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.25h18.5v4H2.75zm1.5 4v13m15.5-13v13m-17 0h18.5m-14.5-6.5h10.5v6.5H6.75zM9.25 17h5.5");
}
</style><path class="rc7vedbkm"/>`,
		"fallback": "iconoven:keyboard-tray-sharp",
	});
}

export default Component;
