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
		"content": `<style>.pob9wvbio {
  d: path("M3.5 12.5H8c1.5 0 2.5-.5 4-1m-4 1c1.5 1 2.75 1.25 4.5 1m-7-1l1 1.5");
}

.s--u4ybvs {
  d: path("m2.5 8.5l9 .75c1 0 1.75-.5 2.5-1.25l1.5-1.5c.75-.75 2-.25 1.75.75L16.75 9H19c1.4 0 2.5 1.1 2.5 2.5V13c0 1.4-1.1 2.5-2.5 2.5l-7.5-.5l-9 1m19-3.75H19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s--u4ybvs"/><path class="pob9wvbio"/></g>`,
		"fallback": "uix-sharp:vein",
	});
}

export default Component;
