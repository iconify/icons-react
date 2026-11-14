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
		"content": `<style>.jdmcpsh9z {
  d: path("m3 9.5l9-4.25l9 4.25l-9 4.25Z");
}

.pudody9mo {
  d: path("M6.75 11.25v5.25c0 1.5 2.25 3 5.25 3s5.25-1.5 5.25-3v-5.25M21 9.5v6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jdmcpsh9z"/><path class="pudody9mo"/></g>`,
		"fallback": "uix-sharp:pin-university",
	});
}

export default Component;
