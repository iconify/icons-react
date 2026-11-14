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
		"content": `<style>.cbxrd8bgz {
  d: path("M2.5 2.5h19m-19 19h19m-15-14v3m5.5-3v3m5.5-3v3m-11.75 6a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm8 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.u_7whfbpp {
  d: path("m8 16.5l2.5-3H14l2 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cbxrd8bgz"/><path class="u_7whfbpp"/></g>`,
		"fallback": "uix-sharp:protected-bike-lane",
	});
}

export default Component;
