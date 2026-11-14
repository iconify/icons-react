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
		"content": `<style>.ebnqqn1-y {
  d: path("M15 21.5h0H3v-19h12v11.3");
}

.ho0333w0b {
  d: path("m3 8l2 1.5L7 8l2 1.5L11 8l2 1.5L15 8M9 9.5v12m-6-8h12m-12 4h10.2M19 22l-2.25-2.75a2.75 2.75 0 1 1 4.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ebnqqn1-y"/><path class="ho0333w0b"/></g>`,
		"fallback": "uix-sharp:pin-chocolate",
	});
}

export default Component;
