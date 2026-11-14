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
		"content": `<style>.p8mdi_bai {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h19v13h-19Zm4.5 13L5 21m12-4.5l2 4.5M12 6.5v4.25m0 2.75h.01");
}
</style><path class="p8mdi_bai"/>`,
		"fallback": "uix-sharp:park-rules-board",
	});
}

export default Component;
