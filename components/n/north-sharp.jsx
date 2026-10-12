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
		"content": `<style>.vxnx65qyo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.36 3.41l4.28 7.93l.36.66H7l.36-.66l4.28-7.93l.36-.66zM9 21.25V15l6 6.25V15");
}
</style><path class="vxnx65qyo"/>`,
		"fallback": "iconoven:north-sharp",
	});
}

export default Component;
