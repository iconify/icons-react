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
		"content": `<style>.hr7-yt4kf {
  d: path("m7.25 13l5.5 3.25M9.5 14.33L8.5 12m-5 8c1.5 0 1.5-1 3-1s1.5 1 3 1s1.5-1 3-1s1.5 1 3 1M3.75 3.75l16.5 16.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ys7yyt9fo {
  cx: 5px;
  cy: 11px;
  r: 1.5px;
}
</style><g class="x2cwu0gfd"><circle class="ys7yyt9fo"/><path class="hr7-yt4kf"/></g>`,
		"fallback": "iconoven:no-swimming-sharp",
	});
}

export default Component;
