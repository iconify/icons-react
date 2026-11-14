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
		"content": `<style>.q-jxavo7l {
  d: path("M9 6q-.75-1 0-2t0-2m6 4q-.75-1 0-2t0-2M2.5 13.5h16.25a2 2 0 0 1 0 4H5.25a2 2 0 0 0 0 4H21.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdxw9gaep {
  fill: currentColor;
  d: path("M2.5 8h19v2.5h-19Z");
}
</style><g class="ulnmmdpxh"><path class="zdxw9gaep"/><path class="q-jxavo7l"/></g>`,
		"fallback": "uix-sharp:underfloor-heating",
	});
}

export default Component;
