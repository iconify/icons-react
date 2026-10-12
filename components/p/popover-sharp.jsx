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
		"content": `<style>.gp8_q8oak {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.75h7V6H5zm.25 8h.9l1.6-2.05l.75-.965l.75.965l1.6 2.05h10.4v10H2.75v-10zm1.25 3.5h11m-11 3.25h7");
}
</style><path class="gp8_q8oak"/>`,
		"fallback": "iconoven:popover-sharp",
	});
}

export default Component;
