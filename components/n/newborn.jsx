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
		"content": `<style>.ti5t4udod {
  d: path("M7.25 8a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM8 14.5c2.5-.5 5.75.5 7.75 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y_ac-vq8h {
  d: path("m14.202 2.545l3.625 1.69a4.5 4.5 0 0 1 2.177 5.98l-4.226 9.064a4.5 4.5 0 0 1-5.98 2.176l-3.625-1.69a4.5 4.5 0 0 1-2.177-5.98l4.226-9.064a4.5 4.5 0 0 1 5.98-2.176Z");
}
</style><g class="ulnmmdpxh"><path class="y_ac-vq8h"/><path class="ti5t4udod"/></g>`,
		"fallback": "uix-sharp:newborn",
	});
}

export default Component;
