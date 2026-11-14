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
		"content": `<style>.pz6-j35rt {
  d: path("M10 2.5v11a2 2 0 0 0 4 0v-11M6.5 6q-1.5 3 0 6m11-6q1.5 3 0 6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z5e-hlcpi {
  d: path("M3.5 15.5h17v6h-17Z");
}
</style><g class="ulnmmdpxh"><path class="z5e-hlcpi"/><path class="pz6-j35rt"/></g>`,
		"fallback": "uix-sharp:vortex-mixer",
	});
}

export default Component;
