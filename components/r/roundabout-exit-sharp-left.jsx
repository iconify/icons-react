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
		"content": `<style>.fhdmpm8re {
  d: path("M13.25 21.5v-7a5 5 0 1 0-3.5-1.5l-4 4");
}

.gnxbd7fhv {
  d: path("M9 17H5.75v-3.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fhdmpm8re"/><path class="gnxbd7fhv"/></g>`,
		"fallback": "uix-sharp:roundabout-exit-sharp-left",
	});
}

export default Component;
