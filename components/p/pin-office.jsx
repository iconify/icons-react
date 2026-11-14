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
		"content": `<style>.q20x7tb6r {
  d: path("M4 21.5V10h5.5V2.5H20v19Zm9-15v6m3.5-6v6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wyi2sgbkk {
  d: path("M13 21.5V17h3.5v4.5");
}
</style><g class="ulnmmdpxh"><path class="q20x7tb6r"/><path class="wyi2sgbkk"/></g>`,
		"fallback": "uix-sharp:pin-office",
	});
}

export default Component;
