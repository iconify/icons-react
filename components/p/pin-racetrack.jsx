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
		"content": `<style>.qcsa44b0h {
  d: path("M4.5 2.5v19m0-18h15v10h-15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.znvx79hss {
  fill: currentColor;
  d: path("M4.5 3.5h5v5h-5Zm10 0h5v5h-5Zm-5 5h5v5h-5Z");
}
</style><g class="ulnmmdpxh"><path class="qcsa44b0h"/><path class="znvx79hss"/></g>`,
		"fallback": "uix-sharp:pin-racetrack",
	});
}

export default Component;
