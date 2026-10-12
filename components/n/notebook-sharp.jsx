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
		"content": `<style>.lgiu9ccyc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 2.75h13.5v18.5H5.75zm-2 4.5h3.5M3.75 12h3.5m-3.5 4.75h3.5m3.75-9h4.5");
}
</style><path class="lgiu9ccyc"/>`,
		"fallback": "iconoven:notebook-sharp",
	});
}

export default Component;
