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
		"content": `<style>.f5-wzybro {
  d: path("M10 20.5V17a2 2 0 0 1 4 0v3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uph9ekb-n {
  d: path("M5 12a7 7 0 0 1 14 0M3.5 12h17v8.5h-17ZM12 2.5V5");
}
</style><g class="ulnmmdpxh"><path class="uph9ekb-n"/><path class="f5-wzybro"/></g>`,
		"fallback": "uix-sharp:pin-dome",
	});
}

export default Component;
