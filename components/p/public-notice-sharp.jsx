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
		"content": `<style>.t9l8gwb1y {
  d: path("M2.75 3.25h18.5v12H2.75zm3.75 12v6m11-6v6");
}

.x0yvusb1f {
  d: path("M8.25 5.75h7.5v7h-7.5zm2 2.5h3.5m-3.5 2.25h3.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="t9l8gwb1y"/><path class="x0yvusb1f"/></g>`,
		"fallback": "iconoven:public-notice-sharp",
	});
}

export default Component;
