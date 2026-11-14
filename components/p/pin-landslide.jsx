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
		"content": `<style>.cpaimfkes {
  d: path("M2.5 3L15 21h6.5M8 4l2.5-1.5l1.75 2L11 6.75L8.5 6.5Zm5 5l2.5-1.25l1.75 2L16 12l-2.5-.25Z");
}

.dhi79kbon {
  d: path("m17 15l2-1.75l2 1.5l-.5 2.5l-2.75.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cpaimfkes"/><path class="dhi79kbon"/></g>`,
		"fallback": "uix-sharp:pin-landslide",
	});
}

export default Component;
