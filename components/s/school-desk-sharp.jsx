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
		"content": `<style>.bh_vrfbvf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6.75h18.5v4H2.75zm3 4v10.5m12.5-10.5v10.5m-12.5-5h12.5");
}
</style><path class="bh_vrfbvf"/>`,
		"fallback": "iconoven:school-desk-sharp",
	});
}

export default Component;
