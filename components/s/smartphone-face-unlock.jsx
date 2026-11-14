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
		"content": `<style>.msl4_xbyq {
  d: path("M14.114 11.27a2.25 2.25 0 0 1-4.228 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ygloctbiu {
  d: path("M6 2.5h12v19H6ZM10.5 18h3m-2.75-9.25h.01m2.49 0h.01");
}
</style><g class="ulnmmdpxh"><path class="ygloctbiu"/><path class="msl4_xbyq"/></g>`,
		"fallback": "uix-sharp:smartphone-face-unlock",
	});
}

export default Component;
