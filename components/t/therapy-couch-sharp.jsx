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
		"content": `<style>.cr1rowptg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7.75v-1.5h3.1l1.024-.003l.376.953l2.4 6.05h-6.9Zm0 5.5h18.5V18H2.75zM5.25 18v3.25M18.75 18v3.25");
}
</style><path class="cr1rowptg"/>`,
		"fallback": "iconoven:therapy-couch-sharp",
	});
}

export default Component;
