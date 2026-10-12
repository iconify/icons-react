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
		"content": `<style>.u0avwkb_i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.75h14M3.75 5h16.5v3.5H3.75zm6.5 5.75h3.5v10.5h-3.5zm0 3.75h3.5m-3.5 2.5h3.5");
}
</style><path class="u0avwkb_i"/>`,
		"fallback": "iconoven:razor-sharp",
	});
}

export default Component;
