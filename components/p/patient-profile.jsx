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
		"content": `<style>.eoz3zibrm {
  d: path("M4.5 2.5h15v19h-15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vjp5bk7_b {
  d: path("M9.5 7.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-1.5 7c0-1.75 1.75-2.75 4-2.75s4 1 4 2.75m-8 3h8");
}
</style><g class="ulnmmdpxh"><path class="eoz3zibrm"/><path class="vjp5bk7_b"/></g>`,
		"fallback": "uix-sharp:patient-profile",
	});
}

export default Component;
