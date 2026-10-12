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
		"content": `<style>.xmylgdhnp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 4.75h6.5v10.5h-6.5l-2-1.75l2-1.75l-2-1.75l2-1.75l-2-1.75l2-1.75l-2-1.75Zm6.5 5.25h10");
}
</style><path class="xmylgdhnp"/>`,
		"fallback": "iconoven:meat-tenderizer-sharp",
	});
}

export default Component;
