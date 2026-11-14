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
		"content": `<style>.c45-3ib8u {
  fill: currentColor;
  d: path("M6.75 3h1.5v10h-1.5Zm6.9 10h-.9V3h1.5v9.2");
}

.h68udwbzy {
  d: path("M16.5 15v6m3-6v6");
}

.k2q427bcm {
  d: path("M5.75 5H3.5A1.5 1.5 0 0 0 2 6.5v3A1.5 1.5 0 0 0 3.5 11h2.25m3.5-6h2.5m-2.5 6h2.5m3.5-6h5.25A1.5 1.5 0 0 1 22 6.5v3a1.5 1.5 0 0 1-1.5 1.5h-5.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k2q427bcm"/><path class="c45-3ib8u"/><path class="h68udwbzy"/></g>`,
		"fallback": "uix-sharp:pipeline-pause",
	});
}

export default Component;
