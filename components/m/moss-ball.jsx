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
		"content": `<style>.aumw-cbsm {
  d: path("M20 12a3 3 0 0 1-1.5 4.75a3 3 0 0 1-4 2.75a3 3 0 0 1-5 0a3 3 0 0 1-4-2.75A3 3 0 0 1 4 12a3 3 0 0 1 1.5-4.75a3 3 0 0 1 4-2.75a3 3 0 0 1 5 0a3 3 0 0 1 4 2.75A3 3 0 0 1 20 12Z");
}

.q-rjoqbhi {
  d: path("M14.75 11.25a1.75 1.75 0 0 1 0-3.5m-5.5 9a1.75 1.75 0 0 1 0-3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="aumw-cbsm"/><path class="q-rjoqbhi"/></g>`,
		"fallback": "uix-sharp:moss-ball",
	});
}

export default Component;
