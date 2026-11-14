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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vemt00jxu {
  d: path("M3.5 19V6.5A1.5 1.5 0 0 1 5 5h4l2 2h6a1.5 1.5 0 0 1 1.5 1.5v3");
}

.wa_ebigtw {
  d: path("m3.5 19l3.25-7.5H21.5L18.25 19Z");
}
</style><g class="ulnmmdpxh"><path class="vemt00jxu"/><path class="wa_ebigtw"/></g>`,
		"fallback": "uix-sharp:open",
	});
}

export default Component;
