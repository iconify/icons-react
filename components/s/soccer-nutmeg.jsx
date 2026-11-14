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
		"content": `<style>.giw2gpahb {
  d: path("m12 15.25l1.75 1.25l-.75 2h-2l-.75-2Z");
}

.pvsc9nbiu {
  d: path("m9.75 2.5l-6 18H2m12.25-18l6 18H22M8 17a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pvsc9nbiu"/><path class="giw2gpahb"/></g>`,
		"fallback": "uix-sharp:soccer-nutmeg",
	});
}

export default Component;
