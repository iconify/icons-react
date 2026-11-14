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
		"content": `<style>.akmzub58u {
  d: path("M2.5 11.5c2.5-4 6-6 9.5-6s7 2 9.5 6c-2.5 4-6 6-9.5 6s-7-2-9.5-6Z");
}

.tqr92nbmc {
  d: path("M9 11.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm3 0h.01m-7.26 0L6.5 11l.75 1m12-.5L17.5 11l-.75-1M18 13.75l-1.5.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="akmzub58u"/><path class="tqr92nbmc"/></g>`,
		"fallback": "uix-sharp:red-eye",
	});
}

export default Component;
