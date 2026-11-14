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
		"content": `<style>.l8971462y {
  d: path("M7.5 6h12v15l-3-1.5l-3 1.5l-3-1.5l-3 1.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ze1vr6qfc {
  d: path("M4.5 17.5V4a1 1 0 0 1 1-1H16m-5.5 7h6m-6 3.5h6");
}
</style><g class="ulnmmdpxh"><path class="l8971462y"/><path class="ze1vr6qfc"/></g>`,
		"fallback": "uix-sharp:receipts-stack",
	});
}

export default Component;
