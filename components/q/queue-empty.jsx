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
		"content": `<style>.l52be5f2m {
  d: path("M3 12.5h5.5L10 15h4l1.5-2.5H21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zpubw_bok {
  d: path("m3 12.5l3-8h12l3 8v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z");
}
</style><g class="ulnmmdpxh"><path class="zpubw_bok"/><path class="l52be5f2m"/></g>`,
		"fallback": "uix-sharp:queue-empty",
	});
}

export default Component;
