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
		"content": `<style>.s77e-_bww {
  d: path("M4.25 4.25h15.5v17H4.25zM8 2.75v3m4-3v3m4-3v3M7.5 10h5m-5 3.5h3");
}

.w12dxkhqq {
  d: path("m15 13l.36 2.64L18 16l-2.64.36L15 19l-.36-2.64L12 16l2.64-.36z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="s77e-_bww"/><path class="w12dxkhqq"/></g>`,
		"fallback": "iconoven:meeting-notes-sharp",
	});
}

export default Component;
