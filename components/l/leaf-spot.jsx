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
		"content": `<style>.acgdmcxko {
  d: path("M5 19c0-9 5-14.5 15.5-15.5C19.5 14 14 19 5 19Zm0 0l-2.5 2.5");
}

.pnbd_wsko {
  d: path("M7.25 15.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm7-7a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm-2 5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="acgdmcxko"/><path class="pnbd_wsko"/></g>`,
		"fallback": "uix-sharp:leaf-spot",
	});
}

export default Component;
