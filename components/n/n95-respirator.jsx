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
		"content": `<style>.f98oy-vxe {
  d: path("M6.25 9C2 9 2 15 5.5 15.25M17.75 9C22 9 22 15 18.5 15.25M12 7v11.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wkn9elg8y {
  d: path("M6.5 8C9 6.5 15 6.5 17.5 8l1.25 5c0 3.5-3 5.5-6.75 5.5s-6.75-2-6.75-5.5Z");
}
</style><g class="ulnmmdpxh"><path class="wkn9elg8y"/><path class="f98oy-vxe"/></g>`,
		"fallback": "uix-sharp:n95-respirator",
	});
}

export default Component;
