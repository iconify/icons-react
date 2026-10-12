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
		"content": `<style>.hh7ns2b5l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.75h4v6.1L16.96 14H7.04L10 8.85ZM7.04 14h9.92l2.24 3.9l1.865 3.328l-3.815.022H6.79l-3.815-.022L4.84 17.9ZM8.5 2.75h7");
}
</style><path class="hh7ns2b5l"/>`,
		"fallback": "iconoven:volumetric-flask-sharp",
	});
}

export default Component;
