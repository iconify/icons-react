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
		"content": `<style>.b3mxnfk2v {
  d: path("M3.5 9.5c0-3.5 3.75-6 8.5-6s8.5 2.5 8.5 6L18 13H6ZM6 16h12c-1 3.5-11 3.5-12 0Z");
}

.jnt0zmb4h {
  d: path("m12 5.75l.764 1.698l1.851.202l-1.379 1.252l.38 1.823L12 9.8l-1.616.925l.38-1.823L9.385 7.65l1.851-.202Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b3mxnfk2v"/><path class="jnt0zmb4h"/></g>`,
		"fallback": "uix-sharp:police-hat-badge",
	});
}

export default Component;
