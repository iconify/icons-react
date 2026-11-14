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
		"content": `<style>.fjynpzbbg {
  d: path("m3 18.25l2.25 2.25l2.25-2.25M14 3.5c0 3 4.75 2.75 4.75 6.75V20.5");
}

.fth2vrbrj {
  fill: currentColor;
  d: path("M10.25 10h3.5v8.5h-3.5Z");
}

.h5vg4zb1t {
  d: path("m16.5 18.25l2.25 2.25L21 18.25");
}

.pb527hbxe {
  d: path("M10 3.5c0 3-4.75 2.75-4.75 6.75V20.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fth2vrbrj"/><path class="pb527hbxe"/><path class="fjynpzbbg"/><path class="h5vg4zb1t"/></g>`,
		"fallback": "uix-sharp:pass-either-side",
	});
}

export default Component;
