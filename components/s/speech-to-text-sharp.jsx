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
		"content": `<style>.rhlfdw6xa {
  d: path("M2.75 10.75a5.25 5.25 0 0 0 10.5 0M8 16v4.5M15.75 8h5.5m-5.5 4.25h5.5m-5.5 4.25h3.5");
}

.vsudofb_g {
  d: path("M5 2.75h6v10.5H5z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="vsudofb_g"/><path class="rhlfdw6xa"/></g>`,
		"fallback": "iconoven:speech-to-text-sharp",
	});
}

export default Component;
