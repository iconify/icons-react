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
		"content": `<style>.qpypud-dn {
  d: path("M5.5 2.5h13V16h-13ZM12 16v5.5m-3 0h6m-6-15h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zxyizh14d {
  fill: currentColor;
  d: path("M10.75 11.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="qpypud-dn"/><path class="zxyizh14d"/></g>`,
		"fallback": "uix-sharp:tram-signal",
	});
}

export default Component;
