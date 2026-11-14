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
		"content": `<style>.d7rcthb9d {
  d: path("M9.185 10.375a3.25 3.25 0 0 1 5.63 0M13.75 9l1.25.75l.75-1.25m-.935 5.125a3.25 3.25 0 0 1-5.63 0M10.25 15L9 14.25l-.75 1.25");
}

.dxsxh5xhc {
  d: path("M6 2.5h12v19H6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dxsxh5xhc"/><path class="d7rcthb9d"/></g>`,
		"fallback": "uix-sharp:live-camera-flip",
	});
}

export default Component;
