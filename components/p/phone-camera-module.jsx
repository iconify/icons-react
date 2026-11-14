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
		"content": `<style>.ig0j83bfn {
  d: path("M8.25 7.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm0 6.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM14.5 7.5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v_nty93df {
  d: path("M6 2.5h12a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-17a1 1 0 0 1 1-1Z");
}
</style><g class="ulnmmdpxh"><path class="v_nty93df"/><path class="ig0j83bfn"/></g>`,
		"fallback": "uix-sharp:phone-camera-module",
	});
}

export default Component;
