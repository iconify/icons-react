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
		"content": `<style>.fnd1yqbdz {
  d: path("m8.5 8.75l2.5 1v1.75c0 1.5-1 2.25-2.5 2.75C7 13.75 6 13 6 11.5V9.75Z");
}

.teyrddcky {
  d: path("M2.5 6.5h12v10h-12Zm12 3.5H18l3.5 3.5v3h-7M5.25 19a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm10.5 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="teyrddcky"/><path class="fnd1yqbdz"/></g>`,
		"fallback": "uix-sharp:truck-insurance",
	});
}

export default Component;
