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
		"content": `<style>.lxp8i07mk {
  d: path("m2.75 10.25l.002-1.364L3.9 8.15l6.75-4.4L12 2.884l1.35.866l6.75 4.4l1.148.736l.002 1.364v10H2.75v-2.5Z");
}

.p-hn58bia {
  d: path("m3.5 9.25l7.1 4.6l1.4.906l1.4-.906l7.1-4.6");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="lxp8i07mk"/><path class="p-hn58bia"/></g>`,
		"fallback": "iconoven:mail-open-sharp",
	});
}

export default Component;
