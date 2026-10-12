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
		"content": `<style>.zgrj8-oyv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 2.75h15.5v10H4.25zm0 7h15.5m-7.75 3v3.5m-9.25 0h18.5v5H2.75zm9.25 0v5");
}
</style><path class="zgrj8-oyv"/>`,
		"fallback": "iconoven:tv-stand-sharp",
	});
}

export default Component;
