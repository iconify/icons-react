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
		"content": `<style>.gg0qdrbwg {
  d: path("M15.25 21.5V19a3 3 0 0 1 3-3h3");
}

.l8gsw-hgr {
  fill: currentColor;
  d: path("M6.5 10.5h3v7h-3Zm6.1 7h-1.1V5h3v9.6");
}

.mti0imbma {
  d: path("M19.5 14.25L21.25 16l-1.75 1.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w85tshbjf {
  d: path("M3.5 3v17.5h8.9");
}
</style><g class="ulnmmdpxh"><path class="w85tshbjf"/><path class="l8gsw-hgr"/><path class="gg0qdrbwg"/><path class="mti0imbma"/></g>`,
		"fallback": "uix-sharp:pivot-chart",
	});
}

export default Component;
