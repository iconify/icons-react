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
		"content": `<style>.k7fr8_bwb {
  d: path("M7.5 2.5h9a2 2 0 0 1 2 2V14a2 2 0 0 0 0 4v1.5a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2V18a2 2 0 0 0 0-4V4.5a2 2 0 0 1 2-2Z");
}

.u4mi32bzh {
  d: path("m10 7.25l2.5-1.75v7M10.25 16h3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k7fr8_bwb"/><path class="u4mi32bzh"/></g>`,
		"fallback": "uix-sharp:pharmacy-queue",
	});
}

export default Component;
