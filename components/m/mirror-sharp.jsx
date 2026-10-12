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
		"content": `<style>.maqvucbxf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 2.75h12.5v15.5H5.75zm3.5 6.5l3-3m-2.5 6.5l5-5M12 18.25v3m-3.5 0h7");
}
</style><path class="maqvucbxf"/>`,
		"fallback": "iconoven:mirror-sharp",
	});
}

export default Component;
