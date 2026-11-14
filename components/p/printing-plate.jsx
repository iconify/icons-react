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
		"content": `<style>.h140qcb6l {
  d: path("M3.5 4H17l3.5 3.5V20h-17Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y8p9kxxre {
  d: path("M14.5 16.5v-9h-3a2.25 2.25 0 0 0 0 4.5h3M12 12l-2.5 4.5m-3-4.5h.01m11.24 0h.01");
}
</style><g class="ulnmmdpxh"><path class="h140qcb6l"/><path class="y8p9kxxre"/></g>`,
		"fallback": "uix-sharp:printing-plate",
	});
}

export default Component;
