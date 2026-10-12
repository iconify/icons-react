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
		"content": `<style>.y9eak8p3b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 8V3.25H8m8 0h4.75V8m0 8v4.75H16m-8 0H3.25V16m.5-4h16.5");
}
</style><path class="y9eak8p3b"/>`,
		"fallback": "iconoven:scan-sharp",
	});
}

export default Component;
